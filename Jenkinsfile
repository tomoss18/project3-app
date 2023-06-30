stage('Checkout') {
    // Checkout the source code from the repository
    // Use the appropriate SCM plugin (e.g., Git)
    git credentialsId: '5fbcd7ca-3da0-48a8-96f3-92c06a9c1363', url: 'https://github.com/tomoss18/project3-app'
}

stage('Build') {
    // Install dependencies and build the Flask application
    sh 'pip install -r requirements.txt'
    sh 'python setup.py build'
}

stage('Test') {
    // Run tests if applicable
    sh 'python -m unittest discover'
}

stage('Deploy') {
    // Deploy the Flask application
    sh 'python app.py'

    // Example file operations using fileExists and file steps
    if (fileExists('path/to/file')) {
        echo 'File exists!'
        def fileContents = file('path/to/file').read()
        // Perform additional operations with the file
    } else {
        error('File does not exist!')
    }
}
