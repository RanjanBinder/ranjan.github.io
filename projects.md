---
layout: page
title: Projects
subtitle: A selection of analytics work, case studies, and technical deep-dives.
permalink: /projects/
---

<div class="projects-grid" style="margin-top:1rem;">
  {% for p in site.projects %}
    <a href="{{ p.url | relative_url }}" class="project-card">
      <p class="project-tag">{{ p.tag }}</p>
      <h3>{{ p.title }}</h3>
      <p>{{ p.summary }}</p>
    </a>
  {% endfor %}
</div>

{% if site.projects.size == 0 %}
<p class="muted" style="margin-top:2rem;">
  Projects are being added. Check back soon, or see the
  <a href="{{ '/blog/' | relative_url }}">blog</a> for current writing.
</p>
{% endif %}
