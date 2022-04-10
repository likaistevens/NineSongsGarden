import { View, Text, Button } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useState } from "react";
import { AtButton, AtTabBar } from "taro-ui";
import { getUserInfo } from "../../utils/getUserInfo";
import "./index.less";

const Index: React.FC = () => {
  // Taro.login({
  //   success: function (res) {
  //     if (res.code) {
  //       //发起网络请求
  //       console.log(res);
  //     } else {
  //       console.log("登录失败！" + res.errMsg);
  //     }
  //   },
  // });
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <View className="index">
      <Text>欢迎使用</Text>
      <AtButton onClick={getUserInfo}>click</AtButton>
      <AtTabBar
        tabList={[
          { title: "待办事项", text: 8 },
          { title: "拍照" },
          { title: "通讯录", dot: true },
        ]}
        onClick={setCurrentTab}
        current={currentTab}
      />
    </View>
  );
};

export default Index;
