<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\DB;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        // Fetch counts from the database
        $totalApplications = DB::table('applications')->count();
        $totalInquiries = DB::table('inquiries')->count();
        $totalUniversities = DB::table('universities')->where('status', 'active')->count();

        return [
            Stat::make('Total Applications', number_format($totalApplications))
                ->description('Applications')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),
            Stat::make('Total Inquiries', number_format($totalInquiries))
                ->description('Inquiries')
                ->descriptionIcon('heroicon-m-question-mark-circle')
                ->color('warning'),
            Stat::make('Active Universities', number_format($totalUniversities))
                ->description('Universities')
                ->descriptionIcon('heroicon-m-academic-cap')
                ->color('success'),
        ];
    }
}