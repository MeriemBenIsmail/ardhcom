provider "kubernetes" {
  config_path = "C:\\Users\\meriem\\.kube\\config" 
}

resource "kubernetes_deployment" "deployment" {
  metadata {
    name = "deployment-ardhcom"
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app = "ardhcom"
      }
    }

    template {
      metadata {
        labels = {
          app = "ardhcom"
        }
      }

      spec {
        container {
          image = "meriem1219/ardhcom"  
          name  = "ardhcom-container"
        }
      }
    }
  }
}
