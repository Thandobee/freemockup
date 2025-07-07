
export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Mockup {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  fileType: 'PSD' | 'PNG' | 'JPG';
  downloads: number;
  isPremium: boolean;
}

export const categories: Category[] = [
  {
    id: 'devices',
    name: 'Devices',
    description: 'Smartphone, tablet, laptop and desktop mockups for showcasing digital designs',
    icon: '📱'
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Product packaging mockups including boxes, bags, bottles and containers',
    icon: '📦'
  },
  {
    id: 'branding',
    name: 'Branding',
    description: 'Business cards, letterheads, logos and corporate identity mockups',
    icon: '🎨'
  },
  {
    id: 'apparel',
    name: 'Apparel',
    description: 'T-shirts, hoodies, caps and clothing mockups for fashion brands',
    icon: '👕'
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Instagram posts, Facebook covers and social media template mockups',
    icon: '📱'
  },
  {
    id: 'print',
    name: 'Print',
    description: 'Posters, flyers, brochures and print material mockups',
    icon: '📄'
  }
];

export const mockups: Mockup[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Mockup',
    description: 'Clean and modern iPhone 15 Pro mockup perfect for app presentations',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
    category: 'devices',
    tags: ['iphone', 'mobile', 'ios', 'app'],
    fileType: 'PSD',
    downloads: 1524,
    isPremium: false
  },
  {
    id: '2',
    title: 'MacBook Pro Workspace',
    description: 'Elegant MacBook Pro mockup in a modern workspace setting',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    category: 'devices',
    tags: ['macbook', 'laptop', 'workspace', 'desk'],
    fileType: 'PSD',
    downloads: 892,
    isPremium: true
  },
  {
    id: '3',
    title: 'Product Box Mockup',
    description: 'Professional product packaging box mockup with customizable design',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    category: 'packaging',
    tags: ['box', 'packaging', 'product', 'branding'],
    fileType: 'PSD',
    downloads: 2156,
    isPremium: false
  },
  {
    id: '4',
    title: 'Business Card Set',
    description: 'Elegant business card mockup set with multiple viewing angles',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    category: 'branding',
    tags: ['business-card', 'corporate', 'identity', 'professional'],
    fileType: 'PSD',
    downloads: 756,
    isPremium: false
  },
  {
    id: '5',
    title: 'T-Shirt Mockup Collection',
    description: 'High-quality t-shirt mockups for apparel design showcase',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop',
    category: 'apparel',
    tags: ['t-shirt', 'clothing', 'fashion', 'apparel'],
    fileType: 'PNG',
    downloads: 1832,
    isPremium: true
  },
  {
    id: '6',
    title: 'Instagram Post Mockup',
    description: 'Social media post mockup for Instagram marketing materials',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    category: 'social-media',
    tags: ['instagram', 'social', 'post', 'marketing'],
    fileType: 'PSD',
    downloads: 634,
    isPremium: false
  },
  {
    id: '7',
    title: 'iPad Pro Tablet Mockup',
    description: 'Modern iPad Pro mockup for tablet app and website presentations',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    category: 'devices',
    tags: ['ipad', 'tablet', 'ios', 'app'],
    fileType: 'PSD',
    downloads: 1245,
    isPremium: false
  },
  {
    id: '8',
    title: 'Coffee Cup Branding',
    description: 'Disposable coffee cup mockup perfect for cafe branding projects',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    category: 'packaging',
    tags: ['coffee', 'cup', 'branding', 'cafe'],
    fileType: 'PNG',
    downloads: 923,
    isPremium: true
  },
  {
    id: '9',
    title: 'Poster Design Mockup',
    description: 'Wall poster mockup for showcasing graphic design and artwork',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
    category: 'print',
    tags: ['poster', 'wall', 'artwork', 'design'],
    fileType: 'PSD',
    downloads: 567,
    isPremium: false
  },
  {
    id: '10',
    title: 'Hoodie Apparel Mockup',
    description: 'Comfortable hoodie mockup for streetwear and casual clothing brands',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
    category: 'apparel',
    tags: ['hoodie', 'streetwear', 'clothing', 'casual'],
    fileType: 'PSD',
    downloads: 1456,
    isPremium: true
  },
  {
    id: '11',
    title: 'Smartphone App Screen',
    description: 'Clean smartphone mockup showing app interface and user experience',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    category: 'devices',
    tags: ['smartphone', 'app', 'mobile', 'ui'],
    fileType: 'PNG',
    downloads: 2341,
    isPremium: false
  },
  {
    id: '12',
    title: 'Brand Identity Package',
    description: 'Complete brand identity mockup including logo, cards, and stationery',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    category: 'branding',
    tags: ['brand', 'identity', 'logo', 'stationery'],
    fileType: 'PSD',
    downloads: 789,
    isPremium: true
  }
];
