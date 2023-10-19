pipeline {
    agent any
    stages {
        stage('Pull from GitHub') {
            steps {
                git 'https://github.com/MeriemBenIsmail/ardhcom'
            }
        }
        stage('Build Image') {
            steps {
                script {
                    echo "building the image"
                    sh "docker build -t ardhcom-app ."
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo "push to docker hub"
                sh "docker tag ardhcom-app meriem1219/ardhcom"
                sh "docker push meriem1219/ardhcom"
            }
        }
    }
}
