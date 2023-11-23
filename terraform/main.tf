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

resource "kubernetes_service" "service" {
  metadata {
    name = "service-ardhcom-deploy"
  }

  spec {
    selector = {
      app = "ardhcom"
    }

    port {
      protocol    = "TCP"
      port        = 80
      target_port = 80
    }

    type = "LoadBalancer"
  }
}
