import Link from "next/link";
import NavStyle from "../../styles/Nav.module.css";
function Nav() {
  return (
    <div className="menu">
      <ul className={NavStyle.nav}>
        <li>
          {/* 
            Link组件实现客户端路由跳转，Link组件需要href属性，属性值为字符串或者对象类型
            next.js应用中的客户端路由跳转，是通过Link组件，而不是a标记
            我们需要厘清一个技术点：这里的组件，已经不是纯粹的DOM元素即HTML标签了，而是React组件，是被react和next做了两重处理后的结果了
            */}
          <Link href="/">
            {/* 连接文字，可以用a包裹 */}
            <a>首页</a>
          </Link>
        </li>
        <li>
          <Link href="/about/about">
            {/* 连接文字也可以使用除了a之外的标签表过，最终也能实现跳转功能 */}
            <span>关于我们</span>
          </Link>
        </li>
        <li>
          {/* 跳转文字，也可以不使用标记包裹，缺省的时候的默认标记是被a包裹 */}
          <Link href="/user/profile">个人中心</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
