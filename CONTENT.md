# Content Management

This site uses Astro Content Collections for easy content management. All content is stored in **single JSON files** in the `src/content` directory for maximum simplicity.

## Content Structure

All content is consolidated into **ONE file per collection type** - no more managing dozens of individual files!

### Projects (`src/content/projects/projects.json`)
All 7 projects in one file with an `items` array:
```json
{
  "items": [
    {
      "id": "1",
      "title": "My Project",
      "description": "Short description",
      "thumbnail": "01.jpg",
      "image": "01.jpg",
      "gitHubLink": "https://github.com/user/repo",
      "demoLink": "https://demo.example.com",
      "stack": ["React", "NodeJS", "PostgreSQL"],
      "features": ["Feature 1", "Feature 2"],
      "order": 1,
      "longDescription": "Optional detailed description"
    }
  ]
}
```

**Image Handling**: Image filenames (like `01.jpg`) are mapped to actual image imports in `GalleryWrapper.astro`. Physical images are in `src/images/fulls/` and `src/images/thumbs/`.

### Skills (`src/content/skills/skills.json`)
All 5 skill categories in one file:
```json
{
  "categories": [
    {
      "category": "Languages",
      "items": ["Javascript", "Ruby", "HTML", "CSS", "SQL"],
      "order": 1
    },
    {
      "category": "Frameworks",
      "items": ["React", "SASS", "Express", "Axios", "jQuery"],
      "order": 2
    }
  ]
}
```

### Education (`src/content/education/education.json`)
All education entries in one file:
```json
{
  "items": [
    {
      "institution": "University Name",
      "program": "Degree Program",
      "date": "Month Year",
      "description": "Description of the education and achievements",
      "order": 1
    }
  ]
}
```

### Tech Stack (`src/content/techStack/techStack.json`)
All 19 tech stack items in one file:
```json
{
  "items": [
    {
      "name": "React",
      "icon": "react.png",
      "category": "framework"
    },
    {
      "name": "NodeJS",
      "icon": "nodejs.png",
      "category": "framework"
    }
  ]
}
```

**Icon Handling**: Icon files should exist in `src/images/techIcons/`.

## Adding New Content

### Add a New Project
1. Open `src/content/projects/projects.json`
2. Add a new object to the `items` array
3. Add project images to `src/images/fulls/` and `src/images/thumbs/`
4. Update the image map in `src/components/Gallery/GalleryWrapper.astro` if adding new image files
5. Ensure all tech stack items referenced exist in `techStack.json`

### Add a New Skill
1. Open `src/content/skills/skills.json`
2. Find the appropriate category or add a new one to the `categories` array
3. Add your skill to the `items` array
4. Adjust `order` numbers if needed

### Add a New Tech Stack Item
1. Open `src/content/techStack/techStack.json`
2. Add a new object to the `items` array with name, icon, and category
3. Add the corresponding icon PNG file to `src/images/techIcons/`
4. Name must match exactly what's used in project stack arrays

### Add Education Entry
1. Open `src/content/education/education.json`
2. Add a new object to the `items` array
3. Set appropriate order number for display sequence

## Benefits of This Approach

✅ **Single Source of Truth**: Each content type in ONE file  
✅ **Easy Updates**: Edit one file to see all content of that type at once  
✅ **Type Safety**: Astro validates all content against schemas  
✅ **Maintainable**: Clear separation of content and presentation  
✅ **Version Control**: Content changes are easily tracked in git  
✅ **No Code Changes**: Add/update content without touching React/Astro components  
✅ **Simple Structure**: No need to manage 30+ separate markdown/JSON files  
✅ **Better Overview**: See all projects, skills, education, or tech items in one place  

## Previous Structure (For Reference)

The old structure had:
- 7 separate markdown files for projects
- 5 separate JSON files for skills
- 2 separate markdown files for education
- 19 separate JSON files for tech stack

**Total: 33 files** → **Now: 4 files** 🎉
