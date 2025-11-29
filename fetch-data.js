//Asynchronous function to fetch user data
async function fetchUserData() {
    // Defining a constant API URL and assigning it the string value
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // Selecting the HTML element where the API Data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch data from API
        const response = await fetch(apiUrl);

        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // 5. Clear loading message
        dataContainer.innerHTML = '';

        // 6. Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
