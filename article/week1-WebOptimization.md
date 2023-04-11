# 🕸️ 웹 최적화

## 📌 웹 최적화는 무엇일까?

웹 최적화는 사용자가 URL을 입력하고 브라우저에 화면이 띄워지기까지의 과정에서 응답속도를 향상시키는 것이다. 이는 사용자 경험을 향상시키는 데 중요한 역할을 한다. 응답속도를 개선함으로써 사용자가 웹페이지를 더 빠르게 로드할 수 있도록 하며, 이는 페이지 방문자 수를 늘리는 데 도움을 줄 수 있다.

<br>

## 📌 최적화가 필요한 이유는 무엇일까?

브라우저 최적화가 필요한 이유는 사용자 경험 때문이라고 생각한다.

pingdom의 분석에 따르면, 페이지 로드까지 4초가 소요되면 이탈률은 24%로 급격히 증가한다고 한다. 이와 같이 사용자가 웹 사이트에 처음 접속했을 때 4초 이상 흰 화면만 본다면, 좋지 않은 첫인상을 갖게 된다. 또한 한 번 이탈한 사용자는 돌아오지 않을 수 있다.

이처럼 웹 사이트의 디자인 등 시각적인 요소 뿐만 아니라 응답성도 사용자 경험에 큰 영향을 미친다. 따라서, 웹 최적화를 통해 웹사이트의 로딩 속도를 향상시켜 사용자 경험을 개선할 수 있다.

<br>

## 📌 이를 위해 어떤 개발을 해야 할까?

웹 프론트에드 환경에서는 각종 파일들을 주고 받으며 화면을 띄우고 화면을 업데이트하는 과정속에서 비용을 소모한다. 웹 프론트앤드 성능 개선을 위해서 웹 개발자는 최소한의 데이터로 가장 빠른 시간에 사용자가 불편함을 느끼지 않는 최적의 화면을 띄워야 한다.

웹 페이지를 최적화 하는 데는 다양한 방법이 있다. 그 중 프론트엔드에서 최적화를 위해 적용할 수 있는 방법들 중 몇 가지를 소개하고자 한다.

<br>

### 1️⃣ 콘텐츠 지연 로드

> Skeleton UI 사용하기

사용자의 네트워크 환경이나 기기의 사양, 서버의 응답속도와 같은 다양한 원인으로 인해 지연 로드되는 콘텐츠는 언제 화면에 노출될지 알 수 없다. 따라서 Skeleton UI를 통해 지연 로드 영역을 미리 확보해 놓는다면 다양한 환경의 사용자가 미리 어떤 콘텐츠가 노출될지 예상하고, 암시적으로 ‘로드 중’이라는 것을 인지할 수 있다.

> Lazy Component

첫화면에 보이지 않는 컴포넌트는 나중에 다운로드하여 파일 개수를 감소하고,
당장 필요하지 않은 컴포넌트의 코드가 분리되어 파일 용량을 압축시킬 수 있다.

```jsx
const Home = () => import('./Home.vue');
const About = () => import('./About.vue');
const Contact = () => import('./Contact.vue');

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
];
```

<br>

### 2️⃣ 이미지 최적화

평균 웹사이트의 반 이상이 이미지로 이루어져 있으며, 이미지의 용량도 다른 콘텐츠에 비해 월등히 높다. 따라서 이미지의 사이즈를 적절히 줄이고, 렌더링 속도를 빠르게 하면, 웹사이트의 렌더링 성능이 좋아진다.

> 미디어쿼리 및 `img` 태그의 `srcset` 속성, `picture` 태그 사용

이미지를 다양한 사이즈에 대응할 수 있도록 적절한 브레이크 포인트를 설정하여 사이즈를 조절해준다. 데스크톱의 이미지는 모바일의 이미지보다 상대적으로 용량이 클 수밖에 없다. 그렇게 되면 사용자는 필요 이상의 이미지를 다운받게 되어 리소스가 낭비될 수 있다. 그러므로 브라우저 사이즈에 맞게 브레이크 포인트를 걸어 과도한 리소스를 사용하지 못하게 해주어 보다 빠른 렌더링이 가능하도록 해준다. 이를 위해 미디어쿼리 및 <img>태그의 srcset 속성, <picture>태그 등의 방법이 있다.

```html
<div class="image-box"></div>

<img
  srcset="./small.png 400w, ./medium.png 700w, ./large.png 1000w"
  sizes="(max-width: 401px) 400px,
          (max-width: 700px) 7000px,
          1000px"
  src="./large.png"
/>

<picture>
  <source media="(min-width: 700px)" srcset="/examples/images/people_960.jpg" />
  <source media="(min-width: 400px)" srcset="/examples/images/people_575.jpg" />
  <img src="/examples/images/people_200.jpg" alt="People" />
</picture>
```

```css
.image-box {
  max-width: 100%;
  width: 400px;
  height: 400px;
  background-image: url(./small.png);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
}

@media (min-width: 401px) {
  .image-box {
    width: 700px;
    height: 700px;
    background-image: url(./midium.png);
  }
}

@media (min-width: 701px) {
  .image-box {
    width: 1000px;
    height: 1000px;
    background-image: url(./large.png);
  }
}
```

> 이미지 lazy loading

웹사이트의 이미지는 최대한 사용자가 보이는 부분부터 로드되도록 처리하며, 사용자가 보이지 않는 부분은 Lazy Loading을 적용하여 사용자의 사용자 경험 저하를 막을 수 있다. 사용자가 처음부터 보지 않는 부분을 초기 렌더링 시 로드하게 되면 정작 사용자가 보이는 화면의 로딩 시간이 지연된다. 이러한 화면 밖의 콘텐츠들을 Above the fold라고 하며, 이러한 Above the fold 이미지들은 자바스크립트를 이용하여 레이지 로딩을 적용한다. 방법은 아래와 같다.

```html
<img loading="lazy" />
```

위와 같이 사용하여 태그 자체에서 지원하는 레이지 로딩을 사용하는 방법이 있고

```html
<img src="1px.gif" data-src="book.jpg" onload="loadReal(this)" />
```

```javascript
function loadReal(img) {
  if (img.style.display != 'none') {
    img.onload = null;
    img.src = img.getAttribute('data-src');
  }
}
```

자바스크립트를 활용하여 위와 같이 활용하는 방법이 있다.위의 img 태그에서 지원하는 loading의 경우에는 아직 비표준이므로, 자바스크립트를 이용한 방법을 사용하는 것이 좋다. 또한 실제 운영에서는 지연 로딩을 지원하는 라이브러리를 사용하는 것이 좋다고 한다.

<br>

### 3️⃣ 웹 폰트 최적화

웹 폰트는 네트워크를 통해 다운로드하는 자원이기 때문에 파일의 크기가 크면 웹 폰트가 적용된 글자가 화면에 표시될 때까지 시간이 지연되는 문제가 발생한다. 이러한 문제는 폰트 파일의 용량을 최적화해 완화할 수 있다.

> WOFF 2.0 형식 폰트 사용

폰트 형식에서 WOFF(Web Open Font Format) 형식과 WOFF 2.0 형식은 압축된 폰트 형식이다. WOFF 2.0 형식 폰트를 사용하면 폰트 파일 용량을 30~50% 더 압축시킬 수 있다.

> 서브셋 폰트

서브셋 폰트(subset font)는 폰트 파일에서 불필요한 글자를 제거하고 사용할 글자만 남겨둔 폰트다.

한글읠 자,모음 모든 경우를 조합하면 한글의 글자 수는 11,172자나 된다. 따라서 실생활에서 거의 사용하지 않는 불필요한 글자를 폰트에서 제거하고 사용할 글자만 남겨 둔다면 용량을 줄일 수 있다.

서브셋 폰트는 서브셋 폰트 메이커나 fontTools 라이브러리를 사용해 만들 수 있다.

<br>

## 📌 최적화를 위한 개발을 꼭 해야 할까?

KissMetrics의 연구 결과에 따르면 페이지 로딩이 약 1초씩 느려질 때마다 상품을 구매하는 사용자의 비율은 약 7%씩 감소한다. 또한, 웹 최적화는 검색 엔진 최적화(SEO)에도 영향을 미친다고 한다. 검색 엔진은 페이지 로드 속도에 대한 정보를 수집하고, 이를 기반으로 웹페이지의 순위를 결정한다. 따라서, 웹 최적화는 사용자 경험과 검색 엔진 최적화, 그리고 수익 창출 측면에서도 중요한 역할을 한다.

이처럼 서비스를 개발하고 이를 이용하는 사용자들의 만족도를 높이기 위해서는, 프론트엔드 개발자들이 매우 중요한 역할을 담당한다.

단순히 화면 UI를 구현할 수 있는 프론트엔드 개발자는 많다. 하지만 위와 같은 최적화 역할을 수행할 줄 아는 것이 프론트엔드 개발자의 중요한 역량이라고 생각한다. 따라서, 최적화 기술을 습득하고 경쟁력을 높이는 것이 필수적이다. 이를 위해서 항상 최신 기술과 트렌드를 파악하고 이를 적용하는 방법을 학습하며, 사용자들의 요구사항에 부응할 수 있도록 노력해야 한다.

<br>

### 📚 참고 자료

[브라우저 렌더링 과정과 최적화](https://velog.io/@bumsu0211/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95%EA%B3%BC-%EC%B5%9C%EC%A0%81%ED%99%94#2-image-lazy-loading)

[웹사이트 최적화 방법 - 이미지 파트](https://oliveyoung.tech/blog/2021-11-22/How-to-Improve-Web-Performance-with-Image-Optimization/)

[웹 폰트 사용과 최적화의 최근 동향](https://d2.naver.com/helloworld/4969726)
