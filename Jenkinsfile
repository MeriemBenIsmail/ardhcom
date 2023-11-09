pipeline {
    agent any
    stages {
        stage('Pull from GitHub') {
            steps {
                git url: 'https://github.com/MeriemBenIsmail/ardhcom', branch: 'main'
                
            }
        }
        /*stage('Build Image') {
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
                sh "docker login -u meriem1219 -p spn123456789"

                sh "docker tag ardhcom-app meriem1219/ardhcom"
                sh "docker push meriem1219/ardhcom"
            }
        }*/
        stage('Kubernetes verification') {
            steps {
                echo "*** executing ***"
                sh "kubectl"
                sh "kubectl get nodes"
            }
        }
        stage('creationg des pods') {
            steps {
                script {
                    echo "*** executing ***"
                    sh "kubectl apply -f deployment.yaml"
                    sh "kubectl get pods"
                    sh "kubectl get deployments"
                }
            }
        }
        stage('creation des services') {
            steps {
                script {
                    echo "*** executing ***"
                    sh "kubectl apply -f service.yaml"
                    sh "kubectl get services"
                }
            }
        }
        stage('creation des loadbalancer') {
            steps {
                script {
                    echo "*** executing ***"
                    sh "kubectl apply -f loadBalancer.yaml"
                    sh "kubectl get services"
                }
            }
        }
    }
}
