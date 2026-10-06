---
layout: homepage
---

## About Me

Hi there! I'm **Xinyu Li** <span class="wave" aria-hidden="true">👋</span> I am a Ph.D. student at the [Auton Lab](https://autonlab.org/) in the School of Computer Science at [Carnegie Mellon University](https://www.cmu.edu/), advised by Prof. [Artur Dubrawski](https://www.ri.cmu.edu/ri-faculty/artur-w-dubrawski/). Prior to my Ph.D., I obtained a B.S. in Computer Science (Information Security) from Shanghai Jiao Tong University and a Master of Information Systems Management (MISM) from Carnegie Mellon University.

<p class="about-contact">Feel free to <a class="contact-link" href="mailto:xinyul2@andrew.cmu.edu">reach out</a> if you are interested in my research and would like to collaborate!</p>

## Research Interests

My research focuses on <span class="hl">LLM-based agents</span>, particularly for <span class="hl">machine learning engineering</span>, and on making LLMs better suited for agentic use.

{% assign p_hermes = site.data.publications.main | where_exp: "p", "p.title contains 'Hermes:'" | first %}
{% assign p_notes = site.data.publications.main | where_exp: "p", "p.title contains 'Notes to Self'" | first %}
{% assign p_tsgym = site.data.publications.main | where_exp: "p", "p.title contains 'TimeSeriesGym:'" | first %}
{% assign p_prlhf = site.data.publications.main | where_exp: "p", "p.title contains 'Personalized Language Modeling'" | first %}
{% assign p_pfl = site.data.publications.main | where_exp: "p", "p.title contains 'From Aggregation to Guidance'" | first %}

<div class="ri-axes">
  <div class="ri-axis">
    <span class="ri-num">01</span>
    <div class="ri-axis-body">
      <div class="ri-axis-title">Agents for ML engineering</div>
      <div class="ri-axis-text">Benchmarking LLM agents on machine learning engineering tasks, and building agents that automate end-to-end ML engineering workflows.</div>
      <div class="ri-papers">
        <a class="ri-paper" href="#pub-{{ p_tsgym.title | slugify }}">TimeSeriesGym<span class="ri-venue">arXiv'25</span></a>
      </div>
    </div>
  </div>
  <div class="ri-axis">
    <span class="ri-num">02</span>
    <div class="ri-axis-body">
      <div class="ri-axis-title">Reasoning beyond a single context</div>
      <div class="ri-axis-text">Teaching LLMs to organize reasoning across many context windows and to reuse abstractions distilled from experience.</div>
      <div class="ri-papers">
        <a class="ri-paper" href="#pub-{{ p_hermes.title | slugify }}">Hermes<span class="ri-venue">arXiv'26</span></a>
        <a class="ri-paper" href="#pub-{{ p_notes.title | slugify }}">Notes to Self<span class="ri-venue">EMNLP'26 Findings</span></a>
      </div>
    </div>
  </div>
  <div class="ri-axis">
    <span class="ri-num">03</span>
    <div class="ri-axis-body">
      <div class="ri-axis-title">Personalized and adaptive LLMs</div>
      <div class="ri-axis-text">Adapting LLMs to individual users and heterogeneous tasks through personalized feedback and multi-task fine-tuning.</div>
      <div class="ri-papers">
        <a class="ri-paper" href="#pub-{{ p_prlhf.title | slugify }}">P-RLHF<span class="ri-venue">NeurIPS'24 AFM</span></a>
        <a class="ri-paper" href="#pub-{{ p_pfl.title | slugify }}">PFL for LLMs<span class="ri-venue">UniReps'25</span></a>
      </div>
    </div>
  </div>
</div>


## News

- <span class="news-date">Sep 2026</span> Our preprint "Hermes: Learning Contextual Reasoning Unlocks Test-Time Scaling" is out! Check out the [project page](./blog/2026/hermes.html).
- <span class="news-date">May 2025</span> I start my Applied Scientist internship at Amazon in Palo Alto.
- <span class="news-date">Oct 2024</span> Our [Personalized RLHF](https://arxiv.org/abs/2402.05133) work is accepted to [NeurIPS 2024 Workshop on Adaptive Foundation Models](https://adaptive-foundation-models.org/index.html).

<details class="news-more" markdown="0">
<summary>
  <span class="nm-more">Show more</span>
  <span class="nm-less">Show less</span>
  <span class="nm-chevron" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
</summary>
<ul>
<li><span class="news-date">Jun 2024</span> I give an invited talk on our <a href="https://arxiv.org/abs/2402.05133">Personalized RLHF</a> work at Mila RLHF reading group.</li>
<li><span class="news-date">Jun 2024</span> I start my internship at the <a href="https://www.microsoft.com/en-us/research/group/biomedical-imaging/">Biomedical Imaging team</a> at Microsoft Research Cambridge.</li>
</ul>
</details>

{% include_relative _includes/publications.md %}

## Experiences

<div class="exp-timeline">
  <div class="exp-item">
    <span class="exp-dot"></span>
    <div class="exp-card">
      <div class="exp-info">
        <div class="exp-role">Applied Scientist Intern</div>
        <div class="exp-org">Amazon (AWS AI Labs)</div>
        <div class="exp-chips">
          <span class="chip">📍 Palo Alto, CA, USA</span>
          <span class="chip">🗓️ Summer 2025</span>
        </div>
      </div>
    </div>
  </div>
  <div class="exp-item">
    <span class="exp-dot"></span>
    <div class="exp-card">
      <div class="exp-info">
        <div class="exp-role">Research Intern</div>
        <div class="exp-org">Microsoft Research Cambridge, Biomedical Imaging</div>
        <div class="exp-chips">
          <span class="chip">📍 Cambridge, UK</span>
          <span class="chip">🗓️ Summer 2024</span>
        </div>
      </div>
    </div>
  </div>
</div>
