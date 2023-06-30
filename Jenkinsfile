pipeline {
  agent any
  stages {
    stage('Deploy') {
      steps {
        copyArtifacts filter: 'app.py', projectName: 'project3-app', selector: lastSuccessful()
        sh 'python app.py'

        script {
          // Example file operations using workspace
          def workspacePath = env.WORKSPACE
          def filePath = workspacePath + '/website_files/app.py'

          if (fileExists(filePath)) {
            echo 'File exists!'
            def fileContents = readFile(filePath)
            // Perform additional operations with the file
            println "File Contents: $fileContents"
          } else {
            error('File does not exist!')
          }
        }
      }
    }
  }
}
