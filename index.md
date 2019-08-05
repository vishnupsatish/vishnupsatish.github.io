---
title: Vishnu Satish
layout: default
---
<head>
    {% include header.html %}
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>

<body onload="bodyOnload()" onresize="windowResized()">
<title>Vishnu Satish</title>
<div id="homepage">
    <img src="https://cdn.pixabay.com/photo/2019/07/30/16/37/sea-4373364_1280.jpg" id="backgroundimg">

    <div id="typewriter">
        <h1 id="typetext0" class="textoftype">>></h1>
        <h1 id="typetext1" class="textoftype">>></h1>
        <h1 id="typetext2" class="textoftype">>></h1>
    </div>



 

    <div id="proj">
        <h1 id="projectstitle">Projects</h1>
        <div class="projects" id="projects">
            {% for project in site.data.projects limit:3 %}
                <div class="projectwrap" id="proj{{ forloop.index }}">
                    <img src="{{project.image}}" class="iconimg" id="img{{ forloop.index }}">
                        <div class="project">
                            <h2 class="projtext">{{project.title}}</h2>
                            <h3 class="projtext">{{project.date}}</h3>
                            <p class="projtext">{{project.description}}</p>
                            {% case project.mac %}
                                {% when 'None' %}
                                {% else %}
                                    <button onclick="location.href='{{project.mac}}'" type="button" class="WebButton osbutton" id="macload">
                                    Download for Mac ⬇</button>
                            {% endcase %}
                            {% case project.windows %}
                                {% when 'None' %}
                                {% else %}
                                    <button onclick="location.href='{{project.windows}}'" type="button" class="WebButton osbutton" id="winload">
                                    Download for Windows ⬇</button>
                            {% endcase %}
                            {% case project.website %}
                                {% when 'None' %}
                                {% else %}
                                    <button onclick="location.href='{{project.website}}'" type="button" class="WebButton">
                                    Go to Website</button>
                            {% endcase %}
                            {% case project.android %}
                                {% when 'None' %}
                                {% else %}
                                    <button onclick="location.href='{{project.android}}'" type="button" class="WebButton">
                                    Download for Android ⬇</button>
                            {% endcase %}
                        </div>
                </div>
            {% endfor %}   
            <button onclick="location.href='{{ site.baseurl }}/projects/'" type="button" class="WebButton" id="viewallbutton">
            View All</button>       
        </div>

    </div>    



    <div id="contactform">
        <h1>Contact</h1>
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/vishnupavan.satish@gmail.com" method="post">
        <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
            <label for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="">
            <label for="message">Message</label>
            <textarea rows="5" name="message" id="message" required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
        </fieldset>
        <input type="submit" value="Submit">
        </form>
    </div>

</div>

</body>


<script src="assets/js/script.js"></script>


<!--
You can use HTML elements in Markdown, such as the comment element, and they won't be affected by a markdown parser. However, if you create an HTML element in your markdown file, you cannot use markdown syntax within that element's contents.
-->