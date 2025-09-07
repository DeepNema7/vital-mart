// <!-- data.js -->
// Sample product data (in a real app, this would come from a database)
const products = [
    {
        id: 1,
        name: "Digital Thermometer",
        description: "Fast and accurate temperature reading with beep alert.",
        price: 24.99,
        category: "Monitoring",
        rating: 4.5,
        image: " https://plus.unsplash.com/premium_photo-1661526565804-c2c01a72723c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERpZ2l0YWwlMjBUaGVybW9tZXRlcnxlbnwwfHwwfHx8MA%3D%3D",
        inStock: true,
        features: ["Fast reading", "Water resistant", "Memory function", "Fever alert"]
    },
    {
        id: 2,
        name: "Blood Pressure Monitor",
        description: "Automatic upper arm blood pressure monitor with LCD display.",
        price: 49.99,
        category: "Monitoring",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxvb2QlMjBwcmVzc3VyZSUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
        inStock: true,
        features: ["One-touch operation", "90 memories", "Fits arms 9-17 inches", "Includes carrying case"]
    },
    {
        id: 3,
        name: "Pulse Oximeter",
        description: "Measures oxygen saturation and pulse rate accurately.",
        price: 34.99,
        category: "Monitoring",
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1679511007600-bb745b470f81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFB1bHNlJTIwT3hpbWV0ZXJ8ZW58MHx8MHx8fDA%3D",
        inStock: true,
        features: ["SpO2 and PR measurement", "LED display", "Portable design", "Low power consumption"]
    },
    {
        id: 4,
        name: "Portable Nebulizerle ",
        description: "Compact and quiet nebulizer for respiratory treatments.",
        price: 89.99,
        category: "Respiratory",
        rating: 4.7,
        image: "https://media.istockphoto.com/id/1306437142/photo/portable-nebulizer-inhalation-device-that-uses-ultra-small-spraying-of-drug.webp?a=1&b=1&s=612x612&w=0&k=20&c=iozOMthoLpd1NJ5AAKJOgQc4B4_uTyCZ0CA8YURhep8=",
        inStock: true,
        features: ["Whisper-quiet operation", "Complete kit included", "Portable design", "Fast treatment times"]
    },
    {
        id: 5,
        name: "First Aid Kit",
        description: "Comprehensive 200-piece first aid kit for emergencies.",
        price: 39.95,
        category: "First Aid",
        rating: 4.9,
        image: "https://plus.unsplash.com/premium_photo-1672073399147-53ebffa8395b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZpcnN0JTIwQWlkJTIwS2l0JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        inStock: true,
        features: ["200 essential pieces", "Durable plastic case", "Clear compartments", "CPR instructions included"]
    },
    {
        id: 6,
        name: "Orthopedic Pillow",
        description: "Ergonomic pillow designed to support neck and alleviate pain.",
        price: 59.99,
        category: "Sleep",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        inStock: true,
        features: ["Hypoallergenic", "Machine washable", "Certified foam", "90-night trial"]
    }
];