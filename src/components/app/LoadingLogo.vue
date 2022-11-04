<template>
    <div class="loading-container bg-white">
        <div class="purple-square bg-primary-purple">
            <div class="loader-container">
                <div class="loader">
                    
                </div>
            </div>
        </div>
        <div class="cyan-square bg-primary-cyan"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .loading-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .purple-square, .cyan-square {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 20px;
    }

    .purple-square {
        z-index: 2;
        display: flex;
        align-items: center;
        filter: drop-shadow(0 0 10px rgba(255,255,255,.1));
        justify-content: center;
    }
    
    .cyan-square {
        filter: drop-shadow(0 0 10px rgba(255,255,255,.1));
        z-index: 1;
        height: 40px;
        border-radius: 15px;
        transform: translate(-60%, -100%) rotate(-30deg) scale(1);
    }

    .loader-container {
        animation: loading 1s ease forwards infinite;
    }

    
    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 40px;
        height: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        /* border: 6px solid rgb(var(--v-theme-primary-purple)); */
        border: 6px solid white;
        border-top: 0;
    }


    @keyframes loading {
        from {
            transform: rotate(0turn);
        }

        to {
            transform: rotate(1turn);
        }
    }
</style>