pipeline {
    agent any
    stages {
        stage('Preparing for build') {
            steps {
                script {
                    def isContainerExists = sh(script: "docker ps -q -f name='bot1_bots_1'", returnStdout: true) != ""
                    def isImageExists = sh(script: "docker images -q bot1_bots_1", returnStdout: true) != ""

                    echo "${isContainerExists}"

                    sh 'docker ps -a'

                    sh 'docker ps'

                    echo "${isImageExists}"

                    if (isContainerExists) {
                        sh 'docker stop -t 0 bot1_bots_1'
                        sh 'docker rm bot1_bots_1'
                    }

                    if (isImageExists) {
                        sh 'docker rmi -f bot1_bots_1'
                    }
                }
            }
        }
        stage('Build Docker Image') {
        steps {
                sh 'docker build -t bot1_bots_1 .'
            }
        }
        stage ('Start Application in Docker') {
            steps {
                sh 'docker run -p 8083:8080 --name bot1_bots_1 bot1_bots_1'
            }
        }
    }
}
