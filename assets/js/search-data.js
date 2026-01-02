// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-scoliosis-is-not-just-a-sideways-curve-it-is-a-twisted-spine",
        
          title: "Scoliosis Is Not Just a Sideways Curve, It Is a Twisted Spine.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/scoliosis-is-twisted-spine/";
          
        },
      },{id: "post-what-is-scoliosis",
        
          title: "What is Scoliosis?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/scoliosis/";
          
        },
      },{id: "post-welcome-to-my-new-blog",
        
          title: "Welcome to My New Blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first-posting/";
          
        },
      },{id: "post-척추측만증의-진단-iv-방사선검사-방사선측정-3-측만곡의-유연성측정",
        
          title: "척추측만증의 진단-IV. 방사선검사 - 방사선측정 (3. 측만곡의 유연성측정)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EC%B8%A1%EB%A7%8C%EA%B3%A1%EC%9D%98-%EC%9C%A0%EC%97%B0%EC%84%B1%EC%B8%A1%EC%A0%95/";
          
        },
      },{id: "post-척추측만증의-진단-iv-방사선검사-방사선측정-2-척추체회전-정도의-측정",
        
          title: "척추측만증의 진단-IV. 방사선검사 - 방사선측정 (2. 척추체회전 정도의 측정)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EC%B2%99%EC%B6%94%EC%B2%B4%ED%9A%8C%EC%A0%84-%EC%A0%95%EB%8F%84%EC%9D%98-%EC%B8%A1%EC%A0%95/";
          
        },
      },{id: "post-척추측만증의-진단-iv-방사선검사-방사선측정-1-cobb씨각-측정",
        
          title: "척추측만증의 진단-IV. 방사선검사 - 방사선측정 (1. Cobb씨각 측정)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Cobb%EC%94%A8%EA%B0%81-%EC%B8%A1%EC%A0%95/";
          
        },
      },{id: "post-가짜척추측만증-i-체위성-척추측만증",
        
          title: "가짜척추측만증-I. 체위성 척추측만증",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EC%B2%B4%EC%9C%84%EC%84%B1-%EC%B2%99%EC%B6%94%EC%B8%A1%EB%A7%8C%EC%A6%9D/";
          
        },
      },{id: "post-가짜측만증이-있다구요",
        
          title: "가짜측만증이 있다구요?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EA%B0%80%EC%A7%9C%EC%B8%A1%EB%A7%8C%EC%A6%9D/";
          
        },
      },{id: "post-척추측만증은-척추가-옆으로-굽은-것이-아니고-척추가-꼬인-것이다",
        
          title: "척추측만증은 척추가 옆으로 굽은 것이 아니고 척추가 꼬인 것이다.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EC%B2%99%EC%B6%94%EC%B8%A1%EB%A7%8C%EC%A6%9D%EC%9D%80-%EC%B2%99%EC%B6%94%EA%B0%80-%EA%BC%AC%EC%9D%B8%EA%B2%83/";
          
        },
      },{id: "post-척추측만증-척추옆굽음증-이란",
        
          title: "척추측만증(척추옆굽음증)이란?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EC%B2%99%EC%B6%94%EC%B8%A1%EB%A7%8C%EC%A6%9D/";
          
        },
      },{id: "post-블로그-시작합니다",
        
          title: "블로그 시작합니다.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%EC%B2%AB%EA%B8%80/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-",
          title: '',
          description: "",
          section: "News",},{id: "news-aaa-학회-발표-부산에서-열린-abc-학회에서-측만곡의-유연성측정에-관해-발표",
          title: 'AAA 학회 발표    부산에서 열린 ABC 학회에서 측만곡의 유연성측정에 관해 발표',
          description: "",
          section: "News",},{id: "news-attended-the-26th-autumn-academic-conference-of-the-korean-society-for-the-advancement-of-spine-surgery-kosass",
          title: 'Attended the 26th Autumn Academic Conference of the Korean Society for the Advancement...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
