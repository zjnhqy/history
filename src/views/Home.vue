<template>
    <div ref="container" class="home">
    <div class="header">
            <h1 class="digital-platform"><b>百川归海：四川大学数字化平台</b></h1>
    </div>
    <div class="timeline-container">
        <div class="module">四川大学校址变迁历史沿革</div>
        <d-timeline  time-position="bottom">
            <d-timeline-item time="1896" position="left">

                <span></span> <button ref="btn1" class="school-name" @click="goToSchoolDetails(1)">
                    四川中西学堂
                </button>
            </d-timeline-item>

            <d-timeline-item time="1902年" position="left">
                <button ref="btn2" class="school-name" data-1="true" @click="goToSchoolDetails(2)">
                    四川通省大学堂<br>四川省城高等学堂
                </button>
            </d-timeline-item>

            <d-timeline-item time="1906年" position="left">
                <button ref="btn3" class="school-name" @click="goToSchoolDetails(3)">
                    四川通省师范学堂
                </button>
            </d-timeline-item>

            <d-timeline-item time="1910年" position="right">
                <button ref="btn4" class="school-name" @click="goToSchoolDetails(4)">
                    华西协合大学
                </button>
            </d-timeline-item>
            <d-timeline-item time="1916年" position="left">
                <button ref="btn5" class="school-name" data-1="true" @click="goToSchoolDetails(5)">
                    国立成都高等师范学校
                </button>
            </d-timeline-item>

            <!-- 1926 -->
            <d-timeline-item time="1926年" position="left">
                <button ref="btn6" class="school-name" @click="goToSchoolDetails(6)">
                    国立成都大学
                </button>
            </d-timeline-item>

            <!-- 1927 -->
            <d-timeline-item time="1927年" position="left">
                <button ref="btn7" class="school-name" data-1="true" @click="goToSchoolDetails(7)">
                    国立成都师范大学
                </button>
            </d-timeline-item>

            <!-- 1931 -->
            <d-timeline-item time="1931年" position="left">
                <button ref="btn8" class="school-name" @click="goToSchoolDetails(8)">
                    国立四川大学
                </button>
            </d-timeline-item>

            <!-- 1933 -->
            <d-timeline-item time="1933年" position="right">
                <button ref="btn9" class="school-name" @click="goToSchoolDetails(9)">
                    私立华西协和大学
                </button>
            </d-timeline-item>

            <!-- 1950 -->
            <d-timeline-item time="1950年" position="left">
                <button ref="btn10" class="school-name" @click="goToSchoolDetails(10)">
                    四川大学
                </button>
            </d-timeline-item>

            <!-- 1951 -->
            <d-timeline-item time="1951年" position="right">
                <button ref="btn11" class="school-name" @click="goToSchoolDetails(11)">
                    华西大学
                </button>
            </d-timeline-item>

            <!-- 1951 -->
            <d-timeline-item time="1952年" position="left">
                <button ref="btn17" class="school-name" data-17="true" @click="goToSchoolDetails(11)">
                    四川化学工业学院
                </button>
            </d-timeline-item>

            <d-timeline-item time="1954年" position="left">
                <button ref="btn18" class="school-name" data-18="true" @click="goToSchoolDetails(11)">
                    成都工学院
                </button>
            </d-timeline-item>

            <!-- 1950 -->
            <d-timeline-item time="1978年" position="left">
                <button ref="btn19" class="school-name" data-19="true" @click="goToSchoolDetails(12)">
                    成都科技大学
                </button>
            </d-timeline-item>

            <!-- 1951 -->
            <d-timeline-item time="1985年" position="right">
                <button ref="btn13" class="school-name" @click="goToSchoolDetails(13)">
                    华西医科大学
                </button>
            </d-timeline-item>

            <!-- 1953 -->
            <d-timeline-item time="1994年" position="left">
                <button ref="btn14" class="school-name" @click="goToSchoolDetails(14)">
                    四川联合大学
                </button>
            </d-timeline-item>

            <!-- 1978 -->
            <d-timeline-item time="1998年" position="left">
                <button ref="btn15" class="school-name" @click="goToSchoolDetails(15)">
                    四川大学
                </button>
            </d-timeline-item>
            <!-- 更多时间轴项... -->
        </d-timeline>
        </div>

        <!-- 定义箭头 marker，并使用 polyline 绘制折线路径 -->
        <svg class="connector-svg">
            <polyline v-for="(line, index) in lines" :key="index" :points="line.points"
                :stroke="line.stroke || '#409EFF'" :stroke-width="line.strokeWidth || 2" fill="none"
                :stroke-dasharray="line.strokeDasharray || ''" marker-end="url(#arrowhead)" />
        </svg>
    </div>

</template>

<script>
export default {
    name: "HomeView",
    data() {
        return {
            connections: [
                {
                    start: "btn1", end: "btn2",
                    // stroke: "#FF5733",         // 自定义颜色
                    // strokeWidth: 3,            // 自定义线宽
                    // strokeDasharray: "5,5",
                    isRightAngle: true,
                },
                { start: "btn3", end: "btn5" },
                { start: "btn2", end: "btn5", isRightAngle: true },
                { start: "btn5", end: "btn6" },
                { start: "btn5", end: "btn7" },
                { start: "btn6", end: "btn8" },
                { start: "btn7", end: "btn8" },
                { start: "btn8", end: "btn10", isRightAngle: true },
                { start: "btn10", end: "btn14" },
                { start: "btn14", end: "btn15", isRightAngle: false },
                // { start: "btn14", end: "btn15" },
                { start: "btn17", end: "btn18", isRightAngle: false },
                { start: "btn18", end: "btn19", isRightAngle: false },
                { start: "btn19", end: "btn14" },
                { start: "btn4", end: "btn9", isRightAngle: false },
                { start: "btn9", end: "btn11", isRightAngle: true },
                { start: "btn11", end: "btn13", isRightAngle: false },
                // { start: "btn14", end: "btn15" },
            ],
            lines: [],
        };
    },
    mounted() {
        this.updateLineCoordinates();
        window.addEventListener("resize", this.updateLineCoordinates);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateLineCoordinates);
    },
    methods: {
        goToSchoolDetails(id) {
            this.$router.push({ name: "SchoolDetails", params: { id } });
        },
        getLinePoints(startEl, endEl, containerRect, isRightAngle) {
            if (isRightAngle) {
                return this.getRightAnglePoints(startEl, endEl, containerRect);
            } else {
                return this.getStraightLinePoints(startEl, endEl, containerRect);
            }
        },
        getRightAnglePoints(startEl, endEl, containerRect) {
            const rect1 = startEl.getBoundingClientRect();
            const rect2 = endEl.getBoundingClientRect();

            const center1 = {
                x: rect1.left - containerRect.left + rect1.width / 2,
                y: rect1.top - containerRect.top + rect1.height,
            };

            const endPoint = {
                x: rect2.left - containerRect.left + rect2.width / 2,
                y: rect2.top - containerRect.top,
            };

            const midPoint1 = { x: center1.x, y: center1.y + 10 }; // 垂直下降 20px
            const midPoint2 = { x: endPoint.x, y: midPoint1.y }; // 水平移动

            return `${center1.x},${center1.y} ${midPoint1.x},${midPoint1.y} ${midPoint2.x},${midPoint2.y} ${endPoint.x},${endPoint.y}`;
        },
        getStraightLinePoints(startEl, endEl, containerRect) {
            const rect1 = startEl.getBoundingClientRect();
            const rect2 = endEl.getBoundingClientRect();

            const startPoint = {
                x: rect1.left - containerRect.left + rect1.width / 2,
                y: rect1.top - containerRect.top + rect1.height,
            };

            const endPoint = {
                x: rect1.left - containerRect.left + rect1.width / 2,
                y: rect2.top - containerRect.top,
            };

            return `${startPoint.x},${startPoint.y} ${endPoint.x},${endPoint.y}`;
        },
        updateLineCoordinates() {
            this.$nextTick(() => {
                const container = this.$refs.container;
                if (!container) return;
                const containerRect = container.getBoundingClientRect();
                const newLines = [];
                this.connections.forEach((conn) => {
                    const startEl = this.$refs[conn.start];
                    const endEl = this.$refs[conn.end];
                    if (startEl && endEl) {
                        const points = this.getLinePoints(startEl, endEl, containerRect, conn.isRightAngle ?? true);;
                        newLines.push({
                            points,
                            stroke: conn.stroke,
                            strokeWidth: conn.strokeWidth,
                            strokeDasharray: conn.strokeDasharray,
                        });
                    }
                });
                this.lines = newLines;
            });
        },
    },
};
</script>


<style scoped>
.home {
    /* padding: 10px; */
    position: relative;
    width: 100vw;
    /* max-width: 1200px; */
    margin: 0 auto;
    /* 设置一个最大宽度，避免内容过宽 */
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    /* overflow: auto; */
}

.module{    
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #409EFF;
    margin-bottom: 20px;
}

.connector-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}


/* 确保按钮样式覆盖默认样式 */
.school-name {
    appearance: none;
    border: 1px solid #409EFF;
    background-color: #f9f9f9;
    color: #409EFF;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    /* white-space: nowrap; */
    /* 禁止换行 */
    max-width: 100%;
    /* 避免超出容器 */
    flex-shrink: 0;
    /* 防止按钮挤压内容 */
    margin-right: 10px;
    /* 按钮在左侧，确保有间距 */
}

.school-name:hover {
    background-color: #e0e0e0;
}

/* 调整 data-sccic 按钮的位置 */

.d-timeline {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* 让时间轴点对齐 */
}

.d-timeline-item {
    display: flex;
    align-items: center;
    /* 保证按钮和文本垂直居中 */
    width: 100%;
}

/* 时间轴的点固定对齐 */
.d-timeline-item::before {
    content: "";
    width: 10px;
    /* 让时间轴的点大小统一 */
    height: 10px;
    background-color: #000;
    border-radius: 50%;
    margin-right: 10px;
    /* 让点和文本保持间距 */
}

button[data-1="true"] {
    position: relative;
    right: calc(30%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}

button[data-1="true"] {
    position: relative;
    right: calc(30%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}

button[data-2="true"] {
    position: relative;
    right: calc(30%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}

button[data-1="true"] {
    position: relative;
    right: calc(30%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}

button[data-17="true"] {
    position: relative;
    right: calc(30%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}

button[data-18="true"] {
    position: relative;
    right: calc(37%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}

button[data-19="true"] {
    position: relative;
    right: calc(35%);
    /* 从父容器右侧偏移80px */
    white-space: nowrap;
    /* 防止文字换行 */
}
.timeline-container{
    background: #f0f0f0;
    border-radius: 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}
</style>