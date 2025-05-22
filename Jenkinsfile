pipeline {
    agent any
    environment {
        BACKUP_DIR = "/var/lib/jenkins/backups/benz-${new Date().format('yyyy-MM-dd-HH-mm-ss')}"
    }
    stages {
        stage('Set Dynamic Backup Path') {
            steps {
                script {
                    env.BACKUP_DIR = "/var/lib/jenkins/backups/benz-${new Date().format('yyyy-MM-dd-HH-mm-ss')}"
                    echo "Backup directory set to: ${env.BACKUP_DIR}"
                }
            }
        }

        stage('Backup Existing Project') {
            steps {
                echo "Backing up project if it exists..."
                sh '''
                    if [ -d /var/www/html/benz ]; then
                        echo "Backing up to ${BACKUP_DIR}"
                        mkdir -p $(dirname ${BACKUP_DIR})
                        cp -r /var/www/html/benz ${BACKUP_DIR}
                    fi
                '''
            }
        }

        stage('Clone or Pull Repo') {
            steps {
                echo "Cloning or pulling repository..."
                sh '''
                    mkdir -p /var/www/html
                    cd /var/www/html
                    if [ -d benz/.git ]; then
                        echo "Git repo exists. Checking out main branch and pulling..."
                        cd benz
                        git config --global --add safe.directory /var/www/html/benz
                        git checkout main
                        git pull origin main
                    else
                        git clone https://github.com/Vishal2827/benz.git
                    fi
                '''
            }
        }

        stage('Git Rollback to Tag') {
            steps {
                echo "Rolling back to tag v1.0.0..."
                sh '''
                    cd /var/www/html/benz
                    git config --global --add safe.directory /var/www/html/benz
                    git fetch --all --tags
                    git checkout v1.0.0 -f
                '''
            }
        }

        stage('Docker Build and Run') {
            steps {
                echo "Building and running Docker container..."
                sh '''
                    cd /var/www/html/benz

                    CONTAINER_EXISTS=$(docker ps -aq -f name=^/benz$)
                    IMAGE_EXISTS=$(docker images -q benz)

                    if [ "$CONTAINER_EXISTS" ]; then
                        echo "Stopping and removing existing container..."
                        docker stop benz
                        docker rm benz
                    else
                        echo "Container 'benz' does not exist."
                    fi

                    if [ "$IMAGE_EXISTS" ]; then
                        echo "Removing existing image..."
                        docker rmi -f benz
                    else
                        echo "Image 'benz' does not exist."
                    fi

                    echo "Starting docker build with logging..."
                    ( docker build -t benz . | tee build.log ) || exit 1
                '''
            }
        }
    }

    post {
        failure {
            echo " Pipeline failed. Check logs."
        }
    }
}
