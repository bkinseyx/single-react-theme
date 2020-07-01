import { parse } from 'node-html-parser';
import { readFileSync, writeFileSync } from 'fs';

const indexHtml = parse(readFileSync('react-app/build/index.html').toString());
writeFileSync(
  'src/templates/react/react_css.ftl',
  indexHtml
    .querySelectorAll('link')
    .filter((tag) => tag.getAttribute('rel') === 'stylesheet')
    .map((scriptTag) => {
      // scriptTag.setAttribute(
      //   'href',
      //   '${css_folder}/react/' +
      //     scriptTag.getAttribute('href').split('/').slice(-1)[0] // last element
      // );
      return scriptTag.toString();
    })
    .join('\n')
);
writeFileSync(
  'src/templates/react/react_js.ftl',
  indexHtml
    .querySelectorAll('script')
    .map((scriptTag) => {
      // scriptTag.setAttribute(
      //   'src',
      //   '${javascript_folder}/react/' +
      //     scriptTag.getAttribute('src').split('/').slice(-1)[0] // last element
      // );
      return scriptTag.toString();
    })
    .join('\n')
);
