import Spline from '@splinetool/react-spline';
import { useIsMobile } from '@/@/components/hooks/useIsMobile';

export function LogoAnimation() {
    const { screenMobile } = useIsMobile();

    return (
        <>
            {screenMobile ? (
                <div className="relative flex">
                    <Spline scene="https://prod.spline.design/yi2vvtz9L2BefP3l/scene.splinecode" />
                </div>
            ) : (
                <div className="flex scale-50 ">
                    <Spline scene="https://prod.spline.design/UwHyViNkfM2tUpNV/scene.splinecode" />
                </div>
            )}
        </>
    );
}
