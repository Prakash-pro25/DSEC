 document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');
            
            // List of users
            const users1 = [{ username: "admin", password: "admin123" }];
              const users2 = [{ username: "prakash", password: "prakash123" }];
               const users3 = [{ username: "muthu", password: "muthu123" }];
            

            // Check if user exists
            const user1 = users1.find(user1 => user1.username === username && user1.password === password);
            const user2 = users2.find(user2 => user2.username === username && user2.password === password);
            const user3 = users3.find(user3 => user3.username === username && user3.password === password);

            if(user1) {
                errorMsg.style.color = "green";
                errorMsg.textContent = "Login successful! Redirecting...";
                
                // Redirect after 1 second
                setTimeout(function() {
                    window.location.href = "file:///E:/Program/project%20dsu/project.html"; // Replace with your actual page URL
                }, 1000);
             } 
                 else if(user2){
                          errorMsg.style.color = "green";
                errorMsg.textContent = "Login successful! Redirecting...";
                
                // Redirect after 1 second
                setTimeout(function() {
                    window.location.href = "file:///E:/Program/HDML/super%20market.html"; // Replace with your actual page URL
                }, 1000);
                 }
                 else if(user3){
                          errorMsg.style.color = "green";
                errorMsg.textContent = "Login successful! Redirecting...";
                
                // Redirect after 1 second
                setTimeout(function() {
                    window.location.href = "file:///E:/Program/HDML/registration.html"; // Replace with your actual page URL
                }, 1000);
                 }
                 else {
                errorMsg.style.color = "red";
                errorMsg.textContent = "Invalid username or password.";
                }
                });