<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StoriesResource\Pages;
use App\Filament\Resources\StoriesResource\RelationManagers;
use App\Models\Stories;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class StoriesResource extends Resource
{
    protected static ?string $model = Stories::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Grid::make()
                ->schema([
                    // LEFT SIDE – MAIN CONTENT
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\TextInput::make('title')
                                ->label('Title')
                                ->required()
                                ->maxLength(255)
                                ->placeholder('Enter story title'),

                            Forms\Components\RichEditor::make('description')
                                ->label('Description')
                                ->required()
                                ->placeholder('Enter story description'),

                            Forms\Components\TagsInput::make('data')
                                ->label('Info')
                                ->required()
                                ->placeholder('Enter tags and press Enter'),
                        ])
                        ->columnSpan([
                            'default' => 12,
                            'lg' => 6,
                        ]),

                    // RIGHT SIDE – SIDEBAR-LIKE
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\FileUpload::make('image')
                                ->label('Featured Image')
                                ->image()
                                ->required()
                                ->disk('bunny') 
                                ->directory('stories')
                                ->visibility('public'),
                            Forms\Components\Select::make('status')
                                ->label('Status')
                                ->required()
                                ->options([
                                    'active' => 'Active',
                                    'inactive' => 'Inactive',
                                    'draft' => 'Draft',
                                ])
                                ->default('active')
                                ->searchable()
                                ->native(false)
                                ->placeholder('Select status'),
                        ])
                        ->columnSpan([
                            'default' => 12,
                            'lg' => 6,
                        ])
                        ->aside(),
                ])
                ->columns(12), 
        ]);
}



    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                ->getStateUsing(fn ($record): ?string => $record->image ? 'https://nhglobaleducation.b-cdn.net/' . $record->image : null),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('data')
                    ->searchable()
                    ->badge()
                    ->formatStateUsing(fn ($state) => is_array($state) ? implode(', ', $state) : $state),
                Tables\Columns\TextColumn::make('status')
                    ->searchable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'danger',
                        'draft' => 'warning',
                        default => 'secondary',
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStories::route('/'),
            'create' => Pages\CreateStories::route('/create'),
            'edit' => Pages\EditStories::route('/{record}/edit'),
        ];
    }
}