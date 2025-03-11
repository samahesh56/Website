---
title: "Building My AI Research Portfolio Website"
date: "2025-03-10"
summary: "A look at the design and development process behind my personal portfolio website, built through effective AI collaboration"
author:
  name: "Sankeerth Mahesh"
categories: ["Web Development", "Next.js", "AI Collaboration", "Design"]
---

# Building My AI Research Portfolio Website

As a computer scientist focused on AI and its social implications, having a professional online presence is essential. This post details my journey creating a portfolio website that showcases my work while reflecting my technical skills and design sensibilities.

## Collaborative Development Approach

One unique aspect of this project was my collaboration with Claude 3.7 Sonnet, an AI assistant from Anthropic. As someone studying AI's potential, I wanted to experience firsthand how AI could assist in the development process:

- **Prompt Engineering**: I crafted detailed prompts to guide the AI in generating code and design solutions
- **Iterative Development**: We worked through multiple iterations, with me providing feedback and direction
- **Learning Opportunity**: This approach allowed me to learn web development concepts while building something practical
- **Human-AI Collaboration**: The final product represents a blend of AI assistance and human creativity/decision-making

This approach aligns perfectly with my research interests in how AI can enhance human capabilities rather than replace them.

## Design Philosophy

My goal was to create a clean, professional interface that incorporates modern web design principles while maintaining excellent performance. I wanted the site to be:

- **Professional yet personal**: Reflecting both my academic background and personality
- **Focused on content**: Making my research and projects the centerpiece
- **Technically robust**: Implementing modern web technologies properly
- **Performance-oriented**: Fast loading and responsive on all devices

## Technology Stack

Through our collaborative process, I selected and implemented:

- **Next.js 14**: For server-side rendering, static generation, and overall performance
- **TypeScript**: For type safety and code maintainability
- **Tailwind CSS**: For efficient styling without bloat
- **Framer Motion**: For subtle, meaningful animations that enhance user experience

## Key Features

### Responsive Design
The site adapts seamlessly to all screen sizes, from mobile devices to large desktop monitors. This was achieved through careful use of Tailwind's responsive design utilities and testing across multiple viewport sizes.

### Interactive Elements
I implemented several interactive elements, including:
- The network visualization on the homepage (built with SVG and vanilla JavaScript)
- Smooth transitions between pages
- Subtle hover effects on interactive elements

### MDX Blog System
For the blog section, I implemented an MDX-based system that allows me to write posts in Markdown while incorporating React components when needed. This gives me the best of both worlds: the simplicity of Markdown with the power of React.

### Contact Form
I built a contact form with client-side validation and secure server-side processing. This allows visitors to reach out directly from the site while protecting against spam.

## Challenges and Solutions

### SVG Animation Performance
Initially, the network visualization on the homepage caused performance issues on mobile devices. I optimized it by:
- Reducing the number of nodes and connections on smaller screens
- Implementing requestAnimationFrame for smooth animation
- Adding a blur effect to hide minor rendering inconsistencies

### Debugging and Testing
Throughout development, I:
- Tested components across different browsers and devices
- Debugged issues with API integrations and component rendering
- Used error boundaries to gracefully handle potential failures
- Implemented comprehensive form validation with helpful error messages

### Learning Through Implementation
The development process served as a practical education in:
- Next.js App Router architecture
- TypeScript type safety implementation
- Modern React patterns and best practices
- API route handling and server-side processing

## Future Improvements

As I continue to develop this site, I plan to add:
- More interactive project demonstrations
- Improved accessibility features
- Performance optimizations for image loading

## Conclusion

Building this portfolio has been both a technical learning journey and a creative outlet. It demonstrates not only my projects but also my ability to effectively collaborate with AI tools to create professional results.

This process helped me gain practical experience with the technologies I'll use in my career while reinforcing my belief that AI tools can be powerful collaborators when guided by thoughtful prompt engineering and human direction.

If you're interested in discussing AI-assisted development or want to know more about my approach to this project, don't hesitate to reach out through the contact form!