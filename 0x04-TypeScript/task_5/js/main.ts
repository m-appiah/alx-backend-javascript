// task_5/js/main.ts

interface MajorCredits {
    credits: number;
    brand: 'major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const sum: MajorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: 'major'
    };
  
    return sum;
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sum: MinorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: 'minor'
    };
  
    return sum;
  }
  
  export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };