---
title: "Building My AI Research Portfolio Website"
date: "2025-03-10"
summary: "A look at the design and development process behind my personal portfolio website"
author:
  name: "Sankeerth Mahesh"
categories: ["Web Development", "Next.js", "Design"]
---

# Building My AI Research Portfolio Website

As a computer scientist focused on AI and its social implications, having a professional online presence is essential. This post details my journey creating a portfolio website that showcases my work while reflecting my technical skills and design sensibilities.

## Design Philosophy

My goal was to create a clean, professional interface that incorporates modern web design principles while maintaining excellent performance. I wanted the site to be:

- **Professional yet personal**: Reflecting both my academic background and personality
- **Focused on content**: Making my research and projects the centerpiece
- **Technically robust**: Implementing modern web technologies properly
- **Performance-oriented**: Fast loading and responsive on all devices

## Technology Stack

For this project, I chose:

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

### Responsive Typography
Maintaining readable typography across device sizes was challenging. I solved this by:
- Using a modular scale for font sizes
- Implementing responsive text sizes with Tailwind's text utilities
- Testing readability across different devices and screen sizes

## Future Improvements

As I continue to develop this site, I plan to add:
- More interactive project demonstrations
- Improved accessibility features
- Performance optimizations for image loading

## Conclusion

Building this portfolio has been both a technical challenge and a creative outlet. It serves not only as a showcase for my work but also as a demonstration of my web development skills.

I hope this behind-the-scenes look provides insight into my development process and technical decision-making. If you're interested in collaborating or have questions about my approach, don't hesitate to reach out through the contact form!