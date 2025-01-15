# Kubernetes 知识总结

## 简介
Kubernetes（简称 K8s）是一个开源的容器编排平台，用于自动化应用的部署、扩展和管理。Kubernetes 的目标是提供一个灵活、可移植的集群管理平台，以支持容器化的现代应用开发。

## 核心概念

### 1. Pod
- **定义**: Pod 是 Kubernetes 中最小的可部署单元，包含一个或多个容器，通常共享存储和网络。
- **特性**:
  - 同一个 Pod 内的容器共享网络命名空间。
  - 可通过 Volume 共享存储。

### 2. Node
- **定义**: Node 是 Kubernetes 集群中的一个工作节点，负责运行 Pod。
- **分类**:
  - Master Node：负责管理集群，包括调度、控制和状态管理。
  - Worker Node：负责运行实际的应用工作负载。

### 3. Deployment
- **定义**: Deployment 是一种高级控制器，用于管理无状态应用的生命周期。
- **功能**:
  - 定义应用的副本数（Replica）。
  - 支持滚动更新和回滚。

### 4. Service
- **定义**: Service 用于暴露一组 Pod 的网络服务，提供负载均衡和稳定的访问方式。
- **类型**:
  - ClusterIP
  - NodePort
  - LoadBalancer

### 5. ConfigMap & Secret
- **ConfigMap**: 用于存储配置信息。
- **Secret**: 用于存储敏感信息，比如密码和密钥。

### 6. Namespace
- **定义**: Namespace 是 Kubernetes 中用于资源隔离的机制。
- **用途**: 适合多租户环境或开发、测试、生产环境的隔离。

## 进阶主题

### 1. Ingress
- **功能**: 提供 HTTP 和 HTTPS 路由功能，将外部请求转发到集群内的 Service。
- **组件**:
  - Ingress Controller
  - Ingress 资源定义

### 2. Helm
- **定义**: Kubernetes 的包管理工具，用于简化应用的部署和管理。
- **优势**:
  - 提供模板化支持，简化配置。
  - 支持版本控制。

### 3. RBAC（Role-Based Access Control）
- **功能**: 用于管理用户或服务账户的权限。
- **组件**:
  - Role 和 ClusterRole
  - RoleBinding 和 ClusterRoleBinding

### 4. Persistent Volume (PV) 和 Persistent Volume Claim (PVC)
- **定义**:
  - PV：集群中的存储资源。
  - PVC：用户对存储资源的请求。
- **用途**: 持久化存储应用数据。

### 5. Operator
- **定义**: Operator 是一种用于管理 Kubernetes 应用程序生命周期的模式。
- **场景**:
  - 自动化部署
  - 应用的自愈和扩展

## 实践经验

### 最佳实践
1. **镜像优化**: 使用轻量级基础镜像，并减少镜像层数。
2. **资源限制**: 为 Pod 设置 CPU 和内存限制，防止资源过载。
3. **日志管理**: 使用集中式日志收集工具，比如 Elasticsearch 和 Fluentd。
4. **监控和告警**: 结合 Prometheus 和 Grafana，监控集群性能和应用健康状态。
5. **CI/CD 集成**: 利用 Jenkins、GitLab CI 或 ArgoCD 实现自动化部署。

### 常见问题
1. **Pod CrashLoopBackOff**:
   - 检查容器日志，确认启动失败原因。
   - 确保依赖的资源（如 ConfigMap、Secret）已配置正确。
2. **Service 无法访问**:
   - 检查 Service 和 Pod 标签选择器是否匹配。
   - 确保网络插件（CNI）正常工作。
3. **资源不足**:
   - 优化资源请求和限制。
   - 增加节点容量。

## 参考资源
- [Kubernetes 官方文档](https://kubernetes.io/)
- [CKA 认证学习指南](https://github.com/cncf/curriculum)
- [Helm 官方文档](https://helm.sh/docs/)

## 贡献指南
欢迎通过提交 Issue 和 Pull Request 为本项目做出贡献！

