# StudBud

Studbud is a study tool that aims to help busy students with part-time work commitments manage their study time effectively.

StudBud has 6 Main functionalities:
* Stopwatch
* Pomodoro Timer
* Music Player
* Referencing Generator
* Task List
* Kanban Board

# The Studbud Difference! 
What separates my study application is that it is inspired by a twitch control board, and that all functionalities are on one page. This removes the hassle of having multiple pages and tabs open for study, as it includes a lot of different features on one tab.

My orgininal proposal included the use of widgets (shown left), but due to time constraints and alternative advice recieved from usability testing, adding all the elements in its full form proved to have its advantages (shown right).

<p float="left">
  <img src="MDImages/Old Studbud Page.png" alt="Old UI" style="float: left; margin-right: 10px; width:60%" /> 
  <img src="MDImages/New Studbud Page.png" alt="Old UI" style="float: left; margin-right: 10px; width:60%" />
</p>

Beyond adjusting the UI I removed the motivational quote generator as it isn't necessary, through user testing of my application.

# Stopwatch
I intergated a stopwatch timer to allow students to manage their time.

Improvements:
The design of the stopwatch is very similar to the hifi mockup, however with the implementation of bootstrap into my code, I accessed their buttons library to incorporate more user friendly buttons, that have extra features like a hover and active which alter that colour of the buttons as well as adding a highlighted border.

# Pomodoro Timer
I intergated a Pomodoro timer to allow busy students to effectively study with reduced potential for distraction. The timer allows students to 'set' how long they would like the study session to occur for before each break.

**I have yet to get the timer functional.**

**Improvements:**
The design of the pomodoro timer is very similar to the hifi mockup, however with the implementation of bootstrap into my code, I accessed their buttons library to incorporate more user friendly buttons, that have extra features like a hover and active which alter that colour of the buttons as well as adding a highlighted border.

# Music Player
The music player has three different types of sounds that can be played. All the types of sounds aim to encourage study and create a stress free environment by adhering to their auditory senses.

The types of music I play incude:
* Lofi HipHop
* Rain Noises
* Cafe Sounds

With inspiration from Modern Web (2021), I was inspired and assisted by this tutorial to develop a music player with an animating play button for usability.
The player has been modified from the orgininal prototype that there is no option to access spotify. I would like to add this feature back in with future developments.

**Upon dealing with issues with uploading the music files, I could only manage to add the rain sounds mp3 file, as the other two were too big.**

# Reading List

**Improvements:**
Originally I wanted to incorporate a Reading List however upon futher consideration and dicussion with students, a better alternative would be to create a referencing generator that will store the approprately referenced link. 

The reading form will request the user to add:
* Source Name
* Author Name
* Year Published
* Link

and format these data entries in an APA 6th format by appending each of the entries in JS.

# TaskList

**Improvements:**
The tasklist is now linked to the kanban board, with the to do tasks being added to the to do column of the kanban board. This improvement was added for better flow as it made more logical sense for the task list to be included in the kanban board. 

**I have yet to get the tasklist functional.**

# Kanban Board

**Improvements:**
The tasklist is now added to the kanban board.

**I have yet to get the kanban board functional.**

# New Addition - Image Generator
The image generator was a new addition that I added for fun, as I personally enjoy looking at calming images to help relax my mind. Inspired by the one made by Javapoint (2021), I was inspired to making a calming image generator widget that acted as an extra interactive feature to help fill the void due to utilising a new UI format.

# Implementing Bootstrap and SCSS

Initially I had trouble getting the formatting of my web application to function properly, until Bootstrap was mentioned in class. Utilising this JS library allowed me to form three rows with the ability to play with the column width to my discretion.

Additionally, Bootstrap also offers other features like the button features which has an active and hover mode allower for greater usability.

SCSS was implemented to make the CSS process a lot easier to work with. With a multitude of different components to style for, SCSS allowed for specific styling for specific components. All stylised elements were then complied in main.scss using SASS. This reduced the potential headache of having extremely long CSS files that will reduce work efficency.

# References:
Otto, M. (2022). Bootstrap. Retrieved from https://getbootstrap.com/


Nomadic Ambience. (2018). Coffee Shop Sounds for Study and Concentration [audio]. Retrieved from https://www.youtube.com/watch?v=gaGrHUekGrc&t=16241s

Giorgio Magarò.
(2022). DRIZZLE RAIN - royalty free sound effect [audio]. Retrieved from https://www.youtube.com/watch?v=fQaLtT1zfsc&t=41s 

Stomp's Playlist. (2020). Lofi Hiphop Mix 2022 | Lofi beats to study | No Copyright Lofi Hip Hop 2022 [audio]. Retrieved from https://www.youtube.com/watch?v=pLcw3dK1yU0&t=8s

Modern Web. (2021). 
How to create Music player with pure HTML, CSS, JS. Retrieved from https://dev.to/kunaal438/how-to-create-music-player-with-pure-html-css-js-c1j

JavaPoint. (2022). Random image generator in JavaScript. Retrieved from https://www.javatpoint.com/random-image-generator-in-javascript

Sass. (2022). Sass: Install Sass. Retrieved from https://sass-lang.com/install
