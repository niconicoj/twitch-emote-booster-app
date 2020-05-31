pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image "node:lts-alpine"
        }
      }
      steps {
        sh './scripts/build.sh'
        sh './scripts/test.sh'
      }
    }
    stage('Deliver') {
      agent {
        node {
          label 'debian-server'
          customWorkspace 'twitch-emote/app'
        }
      }
      when {
        branch 'master'
      }
      steps {
        sh './scripts/deliver.sh'
      }
    }

  }
  environment {
    CI = 'true'
  }
}