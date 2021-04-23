export const setMetaTag = (attributeName, attributeValue, content) => {
  let element = document.head.querySelector(
    `meta[${attributeName}="${attributeValue}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

export const removeMetaTag = (attributeName, attributeValue) => {
  const element = document.head.querySelector(
    `meta[${attributeName}="${attributeValue}"]`
  );

  if (element) {
    document.head.removeChild(element);
  }
};

export const setLinkTag = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};
