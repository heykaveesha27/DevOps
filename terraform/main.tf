provider "aws"{
    region="ap-southeast-2"
}

data "aws_instance" "jenkins"{
    instance_id="i-00f86decb820ec5af"
}

resource "aws_security_group" "jenkins_sg" {
    name = "jenkins-sg"
    description = "allow jenkins ports"
    ingress {
        from_port = 8080
        to_port   = 8080
        protocol  = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}
