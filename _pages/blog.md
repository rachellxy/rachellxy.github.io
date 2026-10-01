---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 3
# Add new entries at the top. read_time and date are optional.
entries:
  - title: "HERMES: Learning Contextual Reasoning Unlocks Test-Time Scaling"
    url: /assets/html/hermes.html
    read_time: 10 min read
    date: e.g. 2026-09-30
---

<style>
  .blog-list {
    list-style: none;
    padding: 0;
    margin: 3rem 0;
  }
  .blog-list li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1.5rem;
    padding: 0.85rem 0;
  }
  .blog-list .blog-title {
    font-size: 1.1rem;
    color: var(--global-text-color);
  }
  .blog-list .blog-title:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }
  .blog-list .blog-meta {
    flex-shrink: 0;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    white-space: nowrap;
  }
  @media (max-width: 576px) {
    .blog-list li {
      flex-direction: column;
      gap: 0.2rem;
    }
  }
</style>

<ul class="blog-list">
  {% for e in page.entries %}
    <li>
      <a class="blog-title" href="{{ e.url | relative_url }}">{{ e.title }}</a>
      <span class="blog-meta">
        {%- if e.read_time -%}{{ e.read_time }}{%- endif -%}
        {%- if e.read_time and e.date %} &nbsp;&middot;&nbsp; {% endif -%}
        {%- if e.date -%}{{ e.date | date: "%Y-%m-%d" }}{%- endif -%}
      </span>
    </li>
  {% endfor %}
</ul>
