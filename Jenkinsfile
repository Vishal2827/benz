pipeline {
    agent any

    environment {
        PARENT_DIR = "/var/www/html"
        PROJECT_NAME = "benz"
        TARGET_PATH = "${PARENT_DIR}/${PROJECT_NAME}"
        REPO_URL = "https://github.com/Vishal2827/benz.git"
    }

    stages {
        stage('Set Dynamic Backup Path') {
            steps {
                script {
                    def timestamp = new Date().format("yyyy-MM-dd-HH-mm-ss")
                    env.BACKUP_DIR = "/var/lib/jenkins/backups/${env.PROJECT_NAME}-${timestamp}"
                    echo "Backup directory set to: ${env.BACKUP_DIR}"
                }
            }
        }

        stage('Backup Existing Project') {
            steps {
                echo "Backing up project if it exists..."
                sh '''
                    if [ -d "$TARGET_PATH" ]; then
                        echo "Backing up to $BACKUP_DIR"
                        mkdir -p "$(dirname "$BACKUP_DIR")"
                        cp -r "$TARGET_PATH" "$BACKUP_DIR"
                    fi
                '''
            }
        }

        stage('Clone or Pull Repo') {
            steps {
                echo "Cloning or pulling repository..."
                sh '''
                    mkdir -p "$PARENT_DIR"
                    cd "$PARENT_DIR"

                    if [ -d "$TARGET_PATH/.git" ]; then
                        echo "Git repo exists. Checking out main branch and pulling..."
                        cd "$TARGET_PATH"
                        git config --global --add safe.directory "$TARGET_PATH"
                        git checkout main || git checkout -b main
                        git pull origin main
                    else
                        echo "Cloning repository..."
                        git clone "$REPO_URL" "$TARGET_PATH"
                    fi
                '''
            }
        }

        stage('Git Rollback to Tag') {
            steps {
                echo "Rolling back to tag v1.0.0..."
                sh '''
                    cd "$TARGET_PATH"
                    git config --global --add safe.directory "$TARGET_PATH"
                    git fetch --all --tags
                    git checkout v1.0.0 -f || echo "Tag v1.0.0 not found, skipping checkout"
                '''
            }
        }

        stage('Docker Build and Run') {
            steps {
                echo "Building and running Docker container..."
                sh '''
                    cd "$TARGET_PATH"

                    docker stop benz || true
                    docker rm benz || true
                    docker rmi -f benz || true

                    docker build -t benz .
                    docker run -d --name benz -p 80:80 benz
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline executed successfully for project: ${env.PROJECT_NAME}"
        }
        failure {
            echo "❌ Pipeline failed. Check logs."
        }
    }
}
