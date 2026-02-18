'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// Add type definition for the custom element to appease TypeScript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'dotlottie-wc': any;
        }
    }
}

export default function Loader({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        // Dynamically load the Lottie Web Component script
        const script = document.createElement('script')
        script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js"
        script.type = "module"
        document.head.appendChild(script)

        // Set a timer to finish loading after a few seconds so the user can see the intro
        const timer = setTimeout(() => {
            onComplete()
        }, 4000) // 4 seconds to allow the animation to play

        return () => {
            clearTimeout(timer)
            // We generally don't remove the script as other components might use it, 
            // or re-mounting would require re-adding it.
        }
    }, [onComplete])

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center">
                {/* Lottie Animation */}
                <dotlottie-wc
                    src="https://lottie.host/8a6a3494-9bde-4edc-a8d1-baa366badbac/qFwIyIGqmA.lottie"
                    style={{ width: '300px', height: '300px' }}
                    autoplay
                    loop
                    background="transparent"
                ></dotlottie-wc>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground text-sm tracking-[0.2em] uppercase mt-4"
                >
                    Loading...
                </motion.p>
            </div>
        </motion.div>
    )
}
