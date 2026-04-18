---
layout: page
title: Blog
subtitle: Notes on SQL, BI, analytics, and learning in public.
permalink: /blog/
---

<ul class="post-list" style="margin-top:1rem;">
  {% for post in site.posts %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%b %-d, %Y" }}
      </time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p class="muted" style="margin-top:2rem;">No posts yet — first one coming soon.</p>
{% endif %}
