node('master') {
    def app

    stage("Clone repository") {
        checkout scm
        }



    stage("Run Automation Suite") {

        
            withCredentials([file(credentialsId: '92045f3a-fdb3-491e-ad2e-d6b9fe7aa3e5', variable: 'mySecretKey')]){
            //sh "ssh ec2-user@3.93.218.251 -i \$mySecretKey -o 'StrictHostKeyChecking=no' 'ls; pwd; pwd; cd /var/www/html; pwd; ls; ansible-playbook playbook-wilson-test-ansible.yaml -i inventory.txt; 'StrictHostKeyChecking=no';'"
            sh "ssh ubuntu@34.194.17.165 -i \$mySecretKey -o 'StrictHostKeyChecking=no' 'ls; pwd; pwd; cd /home/ubuntu/git; pwd; git pull; ls; mvn test; 'StrictHostKeyChecking=no'; git add .; git commit -m 'aa'; git push origin master; '"
            //sh "pwd"
            //sh "pwd"
            //sh "ls"
            // sh "ls"
            // //sh "rm Wilson-Test-EC2KeyPair.pem"
            // sh "chmod -R 777 /var/lib/jenkins/workspace/wilson-test-create-ec2"
            // sh "cp \$mySecretKey /var/lib/jenkins/workspace/wilson-test-create-ec2"
            // sh "ls"
            // sh "chmod 0400 Wilson-Test-EC2KeyPair.pem"
            // sh "python --version"
            // sh "pip --version"
            // sh "pip install --user boto"
            // sh "pip install --user boto3"
            
            //sh "pip install boto"
            //sh "pip install boto3"
            //sh "pip install boto3 --ignore-installed ${six}"
            //sh "vi ~/.boto"
            //sh "ansible-playbook playbook-ansible-create-ec2.yaml -i inventory.txt"
        }
            
          
        }
       
        stage("Clone repository 2nd time") {
        checkout scm
        }

      stage("Cucumber Reports") {

      
          cucumber buildStatus: "UNSTABLE",
          fileIncludePattern: "**/cucumber.json",
          jsonReportDirectory: 'target'
      
       
    }

  
    stage("Wipe Out Jenkins Temp Workspace") {

      deleteDir()
       
    }

}