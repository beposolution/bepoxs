import { useScrollProgress } from '../../hooks/useScrollProgress';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
