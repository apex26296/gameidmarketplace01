// Initialize Firebase (Replace with your Firebase config)
firebase.initializeApp(firebaseConfig);

// User Authentication
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign up error:', errorCode, errorMessage);
        });
}

// Sample data (replace with actual data)
const gameIDs = ['Player123', 'Gamer456', 'ProPlayer789'];

// Display game IDs
function displayGameIDs() {
    const gameList = document.getElementById('gameList');

    gameIDs.forEach((id) => {
        const listItem = document.createElement('li');
        listItem.textContent = id;
        gameList.appendChild(listItem);
    });
}

// Send message
function sendMessage() {
    const message = document.getElementById('messageInput').value;

    // Add logic to send messages to other users
    console.log('Message sent:', message);
}

// Sample data (replace with actual data)
const ratings = [4, 5, 3, 5];

// Calculate average rating
function calculateAverageRating() {
    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((acc, rating) => acc + rating, 0);
    const averageRating = sumRatings / totalRatings;

    console.log('Average Rating:', averageRating);