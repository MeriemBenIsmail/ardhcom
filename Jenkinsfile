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
        stage('creation des loadbalancer') {
            steps {
                script {
                    def kubeConfigPath = "C:\\Users\\meriem\\.kube\\config"
                    env.KUBECONFIG = kubeConfigPath
                    echo "KUBECONFIG path: \$KUBECONFIG"
                    
                    try {
                            echo "*** executing ***"
                            sh "kubectl apply -f loadBalancer.yaml"
                            sh "kubectl get services"
                    } catch (Exception e) {
                            error "Error executing kubectl command: ${e.getMessage()}"
                    }
                       
                    
                }
            }
        }
        stage('Infrastructure as Code with Terraform') {
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
        stage('Run Nagios Tests') {
            steps {
                script {
                    sh " --arguments"
                    def nagiosCheckCommand = "C:\Users\meriem\Downloads\nagios-plugins-2.4.7\plugins\check_http.c -H localhost -p 80 -u /"
                    def nagiosExitCode = sh(script: nagiosCheckCommand, returnStatus: true)
                    if (nagiosExitCode == 0) {
                    echo "Nagios check passed. Deployed Application is healthy."
                    } else {
                    error "Nagios check failed. Deployed Application is not healthy."
                    }
                }
            }
}


    }
      
      
        
    
}
