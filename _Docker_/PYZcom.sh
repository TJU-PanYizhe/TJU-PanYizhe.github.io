# 1. 克隆仓库
git clone https://gitee.com/PanYizhe/PanYizhe.git
# 2. 构建镜像
cd ./PanYizhe/_Docker_
sudo docker build -f PYZcom.Dockerfile -t pyzcom:latest .
sudo docker images pyzcom
# 3. 启动容器
sudo docker run -it --name pyzcom-deploy -p 80:80 -p 443:443 pyzcom /bin/bash
# 4. 访问测试