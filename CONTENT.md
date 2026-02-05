# Content Management

This site uses Astro Content Collections for easy content management. All content is stored in markdown and JSON files in the `src/content` directory.

## Content Structure

### Projects (`src/content/projects/`)
Projects are stored as markdown files with frontmatter. Each project file contains:
- Metadata (title, description, links, etc.)
- Tech stack array
- Features array
- Long description in markdown body

Example:
```markdown
---
id: '1'
title: 'My Project'
description: 'Short description'
thumbnail: '/images/thumbs/01.jpg'
image: '/images/fulls/01.jpg'
gitHubLink: 'https://github.com/user/repo'
demoLink: 'https://demo.example.com' # optional
stack: ['React', 'NodeJS', 'PostgreSQL']
features: ['Feature 1', 'Feature 2']
order: 1
---

Detailed project description goes here...
```

### Skills (`src/content/skills/`)
Skills are stored as JSON files by category:
```json
{
  "category": "Languages",
  "items": ["Javascript", "Ruby", "HTML"],
  "order": 1
}
```

### Education (`src/content/education/`)
Education entries are markdown files with frontmatter:
```markdown
---
institution: 'University Name'
program: 'Degree Program'
date: 'Month Year'
order: 1
---

Detailed description of the education...
```

### Tech Stack (`src/content/techStack/`)
Tech stack icons are defined as JSON files:
```json
{
  "name": "React",
  "icon": "react.png",
  "category": "framework"
}
```

The icon file should exist in `public/images/techIcons/`.

## Adding New Content

### Add a New Project
1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with all required fields
3. Add project images to `public/images/fulls/` and `public/images/thumbs/`
4. Ensure all tech stack items referenced exist in `src/content/techStack/`

### Add a New Skill Category
1. Create a new `.json` file in `src/content/skills/`
2. Define category name, items array, and order

### Add a New Tech Stack Item
1. Create a new `.json` file in `src/content/techStack/`
2. Add the corresponding icon to `public/images/techIcons/`
3. Name format should match what's used in project stack arrays

### Add Education Entry
1. Create a new `.md` file in `src/content/education/`
2. Add frontmatter with institution, program, date, and order
3. Add details in the markdown body

## Benefits of This Approach

1. **Single Source of Truth**: Content is in one place, not scattered across components
2. **Easy Updates**: Edit markdown/JSON files instead of modifying code
3. **Type Safety**: Astro validates content against schemas
4. **Maintainable**: Clear separation of content and presentation
5. **Version Control**: Content changes are tracked in git
6. **No Code Changes**: Add/update content without touching React/Astro components
