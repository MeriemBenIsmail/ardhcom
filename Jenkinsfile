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
        stage("verification de kubectl") {
            steps {
                withCredentials([file(credentialsId: 'kube_credentials', variable: 'KUBECONFIG')]) {
                    echo "======== executing ========"
                    sh "kubectl"
                }
            }
        }
        stage('Deploy to Kubernetes') {
                steps {
                    script {
                        def kubeConfigPath = "C:\\Users\\meriem\\.kube\\config"
                        env.KUBECONFIG = kubeConfigPath
                        echo "KUBECONFIG path: \$KUBECONFIG"
                        
                        try {
                            sh "kubectl version"
                            sh "kubectl apply -f deployment.yaml"  
                        } catch (Exception e) {
                            error "Error executing kubectl command: ${e.getMessage()}"
                        }
                    }

                }
        }
        stage('creation des services') {
            steps {
                script {
                    def kubeConfigPath = "C:\\Users\\meriem\\.kube\\config"
                        env.KUBECONFIG = kubeConfigPath
                        echo "KUBECONFIG path: \$KUBECONFIG"
                        
                        try {
                             echo "*** executing ***"
                             sh "kubectl apply -f service.yaml"
                             sh "kubectl get services"
                        } catch (Exception e) {
                            error "Error executing kubectl command: ${e.getMessage()}"
                        }
                   
                }
            }
        }
    }
      
        stage('creation des services') {
            steps {
                script {
                    withCredentials([file(credentialsId: 'kube_credentials')]) {
                        echo "*** executing ***"
                        sh "kubectl apply -f service.yaml"
                        sh "kubectl get services"
                    }
                }
            }
        }
        stage('creation des loadbalancer') {
            steps {
                script {
                    withCredentials([file(credentialsId: 'kube_credentials')]) {
                        echo "*** executing ***"
                        sh "kubectl apply -f loadBalancer.yaml"
                        sh "kubectl get services"
                    }
                }
            }
        }
    
}
