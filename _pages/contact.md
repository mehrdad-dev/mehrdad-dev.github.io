---
layout: page
title: Contact
permalink: /contact
comments: false
---

<form action="https://formspree.io/{{site.formspree}}" method="POST">    
<p class="mb-4">Please send your message to me. I will reply as soon as possible! <br>
Social pages:
<a target="_blank" href="https://github.com/mehrdad-dev" class="btn-sm"><i class="fab fa-github"></i></a> 
<a target="_blank" href="https://twitter.com/mehrdad_dev" class="btn-sm"><i class="fab fa-twitter"></i></a> 
<a target="_blank" href="https://instagram.com/mehrdad.dev" class="btn-sm"><i class="fab fa-instagram"></i></a> 
<a target="_blank" href="https://www.linkedin.com/in/mehrdad-mohammadian-" class="btn-sm"><i class="fab fa-linkedin-in"></i></a>
</p>

<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>    
<input class="btn btn-dark" type="submit" value="Send">

</form>