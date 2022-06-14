pipeline {
    agent any
    stages {
        stage('Preparing for build') {
            steps {
                script {
                    def isContainerExists = sh(script: "docker-compose ps -q -f name='bot1_bots_1'", returnStdout: true) != ""
                    def isImageExists = sh(script: "docker-compose images -q bot1_bots_1", returnStdout: true) != ""

                    echo "${isContainerExists}"

                    sh 'docker-compose ps -a'

                    sh 'docker-compose ps'

                    echo "${isImageExists}"

                    if (isContainerExists) {
                        sh 'docker-compose stop -t 0 bot1_bots_1'
                        sh 'docker-compose rm bot1_bots_1'
                    }

                    if (isImageExists) {
                        sh 'docker-compose rmi -f bot1_bots_1'
                    }
                }
            }
        }
        stage('Build Docker Image') {
        steps {
                sh 'docker-compose build -t bot1_bots_1 .'
            }
        }
        stage ('Start Application in Docker') {
            steps {
                sh 'docker-compose run -p 8083:8080 --name bot1_bots_1 bot1_bots_1'
            }
        }
    }
}
