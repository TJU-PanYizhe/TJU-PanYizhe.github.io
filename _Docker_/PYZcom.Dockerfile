FROM nginx:latest

LABEL authors="PanYizhe"
LABEL description="PYZcom"

USER root

ENV MyPath /pyz
WORKDIR ${MyPath}

# 复制nginx配置文件
COPY
# 复制项目文件
COPY

RUN systemctl start nginx.service
RUN systemctl enable nginx.service

# 构建镜像
# sudo docker build -f PYZcom.Dockerfile -t pyzcom:latest .
# 查看镜像
# sudo docker images pyzcom
# 创建容器
# sudo docker run -it --name pyzcom-deploy pyzcom /bin/bash
# 查看容器
# sudo docker ps -af ancestor=pyzcom