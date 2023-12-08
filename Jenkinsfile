pipeline {
    agent any
    stages {
        stage('Pull from GitHub') {
            steps {
                git url: 'https://github.com/MeriemBenIsmail/ardhcom', branch: 'main'
                
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
                sh "docker login -u meriem1219 -p spn123456789"
                sh "docker tag ardhcom-app meriem1219/ardhcom"
                sh "docker push meriem1219/ardhcom"
            }
        }
        stage("verification de kubectl") {
            steps {
                withCredentials([file(credentialsId: 'kube_credentials', variable: 'KUBECONFIG')]) {
                    echo "======== executing ========"
                    sh "kubectl"
                }
            }
        }
        stage('Infrastructure as Code with Terraform & Kubernetes as Provider') {
            steps {
                script {
                    dir('terraform') {
                        sh 'terraform destroy -auto-approve -var="image_tag=latest"'
                        sh 'terraform init'
                        sh 'terraform apply -auto-approve -var="image_tag=latest"'
                    }
                }
            }
        }
    }
}
