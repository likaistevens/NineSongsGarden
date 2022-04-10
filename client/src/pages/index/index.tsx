import { View, Text } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import "./index.less";

const Index: React.FC = () => {
  const router = useRouter();
  console.log(router);

  Taro.cloud
    .callFunction({
      name: "cloudFunctions",
      data: {
        type: "getOpenId",
      },
    })
    .then((res) => {
      console.log(res);
      // output: res.result === 3
    })
    .catch((err) => {
      // handle error
    });

  return (
    <View className="index">
      <Text>欢迎使用</Text>
    </View>
  );
};

export default Index;
