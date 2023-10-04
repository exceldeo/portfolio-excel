import { Project } from '@/types/Project';

const projectDatas: Project[] = [...Array(10)].map((_) => ({
  id: '1',
  name: 'Flowbite',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est magna, iaculis et dui consectetur, suscipit porta leo. Sed lacinia leo quam, faucibus euismod diam cursus sit amet. Proin imperdiet felis augue, sed venenatis ante fringilla aliquam. Nullam rutrum magna quam, a egestas ligula cursus sed. Morbi ante metus, vehicula a turpis a, commodo sagittis dolor. Morbi imperdiet, nunc eget posuere gravida, risus dui mattis lacus, eu fermentum dui dui nec quam. Quisque pharetra venenatis nisl at efficitur. Morbi faucibus eros eu sollicitudin tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Suspendisse rutrum ex quis nisl hendrerit pulvinar. Sed tempor semper mauris in porta.

    Vivamus iaculis laoreet urna, ac molestie mauris eleifend ut. Sed malesuada sapien nec imperdiet gravida. Suspendisse potenti. Mauris sagittis metus leo, et finibus nisi rhoncus at. Vivamus nec dui rutrum, consequat libero quis, lobortis lacus. Nam diam urna, convallis non urna in, posuere placerat velit. Sed pellentesque enim convallis erat pharetra faucibus.
    
    Curabitur maximus lorem facilisis mauris scelerisque, eu commodo turpis mollis. Integer porttitor massa vitae ante placerat mattis. Fusce ullamcorper nisl mi, sed scelerisque tortor consequat in. Mauris suscipit mi eget purus tristique hendrerit. Integer sem urna, accumsan ut est nec, laoreet luctus enim. Integer et velit libero. Nam eget lorem at sapien accumsan sodales eu nec mi. Phasellus venenatis elit id lacus facilisis ultrices. Integer mollis leo lorem, eu pretium nisl eleifend in. Proin id venenatis dui, sit amet mattis erat. Suspendisse placerat mauris pellentesque, dictum libero vel, feugiat lacus. Phasellus interdum in sem eu fringilla. Proin id consectetur lacus. Sed dapibus lorem nec tincidunt fringilla. Praesent ullamcorper magna nec iaculis aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Vestibulum pulvinar, turpis id aliquet posuere, velit tortor congue ipsum, vitae volutpat nisi nulla quis metus. Praesent ultrices interdum pulvinar. Aliquam a tortor sapien. Pellentesque arcu est, molestie sed turpis vitae, tempus fringilla dolor. Praesent pellentesque libero sem. Phasellus consequat arcu id bibendum elementum. Cras non eros et nulla interdum varius. Aliquam pretium sagittis scelerisque. Sed viverra nulla nibh, ac varius metus maximus eget. Mauris sagittis diam ac ligula euismod bibendum. Vivamus id tortor id libero posuere sagittis et et neque. Nullam viverra laoreet ligula, vitae porta nisi lacinia vel. Curabitur leo nisl, accumsan sed tincidunt id, vulputate ac felis. Quisque finibus pretium sapien.
    
    Phasellus sed metus efficitur, mollis tellus eget, semper est. Nam mauris nulla, luctus at ultricies eu, tempus quis velit. Donec lorem sem, faucibus sed accumsan vitae, fringilla eu risus. In condimentum rutrum sem, eleifend finibus neque semper vitae. Phasellus sit amet arcu nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in eros vel nisl elementum imperdiet. Nullam facilisis purus ipsum, sed finibus dolor aliquam a. Ut elit mauris, fringilla quis euismod non, bibendum nec erat. Cras orci nisl, hendrerit sed consequat et, finibus vel sem. Mauris sodales leo ipsum, eget convallis odio auctor et. Fusce pulvinar sed sapien ac aliquam. Vestibulum auctor, nulla sed fermentum tristique, ex dolor facilisis nibh, sed eleifend mi quam ac sem.`,
  thumbnail: 'https://flowbite.com/docs/images/flowbite-logo.svg',
  slug: 'flowbite',
  url: '',
  github: [
    {
      label: 'Github',
      url: '',
    },
  ],
  tech: ['Tailwind CSS', 'Flowbite'],
  images: [
    '/images/projects/image-1.png',
    '/images/projects/image-2.png',
    '/images/projects/image-1.png',
    '/images/projects/image-2.png',
    '/images/projects/image-1.png',
    '/images/projects/image-2.png',
    '/images/projects/image-1.png',
    '/images/projects/image-2.png',
    '/images/projects/image-1.png',
    '/images/projects/image-2.png',
  ],
}));

export default projectDatas;
