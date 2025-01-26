import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as o,o as n}from"./app-DCuphcro.js";const l={};function b(a,e){return n(),t("div",null,e[0]||(e[0]=[o('<h2 id="kubernetes-知识点目录" tabindex="-1"><a class="header-anchor" href="#kubernetes-知识点目录"><span>Kubernetes 知识点目录</span></a></h2><ol><li>Kubernetes 基础</li></ol><p>1.1 什么是 Kubernetes<br> • 容器编排的概念<br> • Kubernetes 的发展历史<br> • 云原生和 Kubernetes 的关系</p><p>1.2 Kubernetes 的架构与工作原理<br> • Master 和 Node 的角色划分<br> • 控制平面（Control Plane）<br> • 集群状态的声明式管理</p><p>1.3 Kubernetes 的基本术语<br> • Pod、Node、Cluster、Namespace<br> • Label 和 Annotation<br> • Selector 和 FieldSelector</p><p>1.4 配置文件与资源定义<br> • YAML 文件结构和语法<br> • Kubernetes 对象的四个字段（apiVersion, kind, metadata, spec）</p><p>1.5 kubectl 工具<br> • 常用命令<br> • 命令参数详解（如 kubectl get, kubectl describe, kubectl apply）<br> • 调试技巧（如 kubectl exec, kubectl port-forward, kubectl debug）</p><ol start="2"><li>核心组件</li></ol><p>2.1 Master 节点组件<br> • API Server：架构与工作流程、认证授权、准入控制<br> • Scheduler：调度器算法、调度策略（Spread, Affinity）<br> • Controller Manager：控制器种类（ReplicationController, NodeController）<br> • etcd：分布式存储的作用与使用、备份与恢复</p><p>2.2 Node 节点组件<br> • Kubelet：与容器运行时的交互、Pod 生命周期管理<br> • Kube-Proxy：实现原理、iptables 模式与 IPVS 模式<br> • CRI：容器运行时接口（Containerd、CRI-O、Docker 支持情况）</p><p>2.3 插件与扩展<br> • 插件分类（CNI、CSI、CRI）<br> • 动态加载与热更新</p><ol start="3"><li>核心资源与对象</li></ol><p>3.1 Pod<br> • Pod 的定义与多容器模型<br> • InitContainer 的使用<br> • Pod 生命周期与状态（Pending, Running, Succeeded, Failed）</p><p>3.2 ReplicaSet 和 Deployment<br> • 部署与副本控制的区别<br> • 滚动更新与回滚机制<br> • Deployment 策略（Recreate, RollingUpdate）</p><p>3.3 StatefulSet<br> • StatefulSet 的特性（稳定网络标识、持久存储）<br> • 应用场景（如数据库、分布式存储）<br> • Headless Service 的使用</p><p>3.4 DaemonSet<br> • 特性与场景（如日志采集、监控 Agent）<br> • 滚动更新与策略</p><p>3.5 Job 和 CronJob<br> • Job 的完成策略（非并行、并行）<br> • CronJob 的时间调度规则</p><p>3.6 ConfigMap 和 Secret<br> • 区别与最佳实践<br> • 数据加密与安全传输<br> • 使用 ConfigMap 和 Secret 配置容器</p><p>3.7 Namespace<br> • 资源隔离与多租户支持<br> • 默认 Namespace 与自定义 Namespace</p><p>3.8 Service<br> • Service 的四种类型（ClusterIP, NodePort, LoadBalancer, ExternalName）<br> • Headless Service 和 StatefulSet 的结合<br> • 服务发现与 DNS</p><p>3.9 Ingress<br> • Ingress 控制器（如 NGINX, Traefik, HAProxy）<br> • 路由规则与 TLS 配置<br> • Ingress 的高级特性（Rewrite, Load Balancing）</p><p>3.10 Volume 与存储资源<br> • Volume 类型（emptyDir, hostPath, NFS, Ceph, GlusterFS）<br> • PV 和 PVC 的绑定<br> • StorageClass 的动态存储供应</p><ol start="4"><li>Kubernetes 网络</li></ol><p>4.1 Kubernetes 网络模型<br> • 三层网络（Pod 网络、Service 网络、外部网络）<br> • Kubernetes 网络的特点（Pod 间直接通信、IP 隔离）</p><p>4.2 Service 的实现原理<br> • iptables 与 IPVS 实现<br> • External IP 和 LoadBalancer 配置</p><p>4.3 CNI 插件<br> • Flannel（Overlay 模式与 Host-GW 模式）<br> • Calico（BGP, Policy Enforcement）<br> • Cilium（基于 eBPF 的高性能网络）</p><p>4.4 网络策略（Network Policy）<br> • 网络策略的语法与配置<br> • Policy 的作用域与限制</p><p>4.5 Ingress 网络<br> • 多 Ingress 控制器的兼容性<br> • Ingress 网络中的 TLS 终结</p><ol start="5"><li>安全性</li></ol><p>5.1 RBAC（Role-Based Access Control）<br> • Role 和 ClusterRole 的定义<br> • RoleBinding 与 ClusterRoleBinding<br> • 最小权限原则（Least Privilege Principle）</p><p>5.2 ServiceAccount<br> • ServiceAccount 的定义与关联<br> • Pod 与 ServiceAccount 的绑定</p><p>5.3 Pod 安全策略（PSP）<br> • PSP 的配置项（如 RunAsUser, Privileged, Capabilities）<br> • PodSecurityAdmission 替代 PSP 的特性</p><p>5.4 数据加密与机密管理<br> • Secret 数据的加密存储<br> • etcd 数据加密配置</p><ol start="6"><li>存储与持久化</li></ol><p>6.1 Kubernetes 存储概述<br> • Kubernetes 对持久化存储的支持</p><p>6.2 Volume 的类型与使用场景<br> • emptyDir：临时存储<br> • hostPath：主机目录映射<br> • PersistentVolume（PV）与动态存储供应</p><p>6.3 CSI 插件<br> • CSI 的架构与原理<br> • 常用存储驱动（如 Ceph CSI, AWS EBS CSI）</p><ol start="7"><li>调度与扩展</li></ol><p>7.1 调度器的工作机制<br> • Scheduler 的工作流程<br> • 自定义调度器的使用</p><p>7.2 自动扩展<br> • Horizontal Pod Autoscaler（HPA）<br> • Vertical Pod Autoscaler（VPA）<br> • Cluster Autoscaler</p><p>7.3 节点亲和性与抗性<br> • NodeSelector 与 NodeAffinity<br> • Taints and Tolerations 的使用场景</p><ol start="8"><li>运维与管理</li></ol><p>8.1 集群安装工具<br> • kubeadm<br> • Kops<br> • Kubespray</p><p>8.2 灾难恢复与备份<br> • etcd 数据备份与恢复<br> • 集群状态检查与恢复</p><p>8.3 配置管理<br> • Helm<br> • Kustomize</p><p>8.4 日志与监控<br> • Fluentd 日志收集<br> • Prometheus 集群监控<br> • Grafana 可视化展示</p><ol start="9"><li>高级特性</li></ol><p>9.1 CRD（Custom Resource Definition）<br> • 自定义资源的创建与注册<br> • CRD 的版本控制</p><p>9.2 Operator 模式<br> • Operator 的设计理念<br> • Operator SDK 的使用</p><p>9.3 Admission Controller<br> • 准入控制器的种类（Validating, Mutating）</p><ol start="10"><li>企业级扩展</li></ol><p>10.1 多集群管理<br> • Karmada<br> • Cluster API</p><p>10.2 服务网格<br> • Istio<br> • Linkerd</p><p>10.3 企业级最佳实践<br> • 生产环境的集群设计<br> • 高可用架构与优化策略</p>',54)]))}const s=r(l,[["render",b],["__file","20250101.html.vue"]]),c=JSON.parse('{"path":"/posts/20250101.html","title":"","lang":"en-US","frontmatter":{"description":"Kubernetes 知识点目录 Kubernetes 基础 1.1 什么是 Kubernetes • 容器编排的概念 • Kubernetes 的发展历史 • 云原生和 Kubernetes 的关系 1.2 Kubernetes 的架构与工作原理 • Master 和 Node 的角色划分 • 控制平面（Control Plane） • 集群状态的声...","head":[["meta",{"property":"og:url","content":"https://wechat.cillian.website/posts/20250101.html"}],["meta",{"property":"og:site_name","content":"Cillian-k8s"}],["meta",{"property":"og:description","content":"Kubernetes 知识点目录 Kubernetes 基础 1.1 什么是 Kubernetes • 容器编排的概念 • Kubernetes 的发展历史 • 云原生和 Kubernetes 的关系 1.2 Kubernetes 的架构与工作原理 • Master 和 Node 的角色划分 • 控制平面（Control Plane） • 集群状态的声..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-26T12:21:53.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-26T12:21:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-26T12:21:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cillian\\",\\"url\\":\\"https://www.cillian.website\\"}]}"]]},"headers":[{"level":2,"title":"Kubernetes 知识点目录","slug":"kubernetes-知识点目录","link":"#kubernetes-知识点目录","children":[]}],"git":{"createdTime":1737894113000,"updatedTime":1737894113000,"contributors":[{"name":"cillianops","username":"cillianops","email":"cillianops@gmail.com","commits":1,"url":"https://github.com/cillianops"}]},"readingTime":{"minutes":3.66,"words":1099},"filePathRelative":"posts/20250101.md","localizedDate":"January 26, 2025","excerpt":"<h2>Kubernetes 知识点目录</h2>\\n<ol>\\n<li>Kubernetes 基础</li>\\n</ol>\\n<p>1.1 什么是 Kubernetes<br>\\n•\\t容器编排的概念<br>\\n•\\tKubernetes 的发展历史<br>\\n•\\t云原生和 Kubernetes 的关系</p>\\n<p>1.2 Kubernetes 的架构与工作原理<br>\\n•\\tMaster 和 Node 的角色划分<br>\\n•\\t控制平面（Control Plane）<br>\\n•\\t集群状态的声明式管理</p>\\n<p>1.3 Kubernetes 的基本术语<br>\\n•\\tPod、Node、Cluster、Namespace<br>\\n•\\tLabel 和 Annotation<br>\\n•\\tSelector 和 FieldSelector</p>","autoDesc":true}');export{s as comp,c as data};
