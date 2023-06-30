stage('Checkout') {
    // Checkout the source code from the repository
    // Use the appropriate SCM plugin (e.g., Git)
    git credentialsId: 'tomoss18', url: 'https://github.com/tomoss18/project3-app'
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
}
