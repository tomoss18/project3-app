stage('Deploy') {
    // Deploy the Flask application
    sh 'python app.py'

    script {
        // Example file operations using hudson.FilePath
        def workspacePath = new hudson.FilePath(workspace)
        def filePath = workspacePath.child('website_files/app.py')

        if (filePath.exists()) {
            echo 'File exists!'
            def fileContents = filePath.readToString()
            // Perform additional operations with the file
            println "File Contents: $fileContents"
        } else {
            error('File does not exist!')
        }
    }
}
